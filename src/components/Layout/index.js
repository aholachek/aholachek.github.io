import Helmet from 'react-helmet';
import React from 'react';
import { Location } from '@reach/router';
import CustomProperties from 'react-custom-properties';
import colorThemes from './color-themes';
import Header from '../Header';
import AboutMe from '../AboutMe';

import 'normalize.css';
import '../../styles/index.scss';

const pageTransitionTime = 500;

const getCSSVars = (d = {}) => {
  return {
    '--color': d.background === 'lighter' ? d.darker : d.lighter,
    '--background-color': d.background === 'lighter' ? d.lighter : d.darker,
    '--darker-color': d.darker,
    '--lighter-color': d.lighter
  };
};

class Layout extends React.Component {
  state = {
    prevPage: {},
    theme: colorThemes[Math.floor(Math.random() * colorThemes.length)]
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      const newThemes = colorThemes.filter(t => t !== this.state.theme);
      this.setState({
        prevPage: {
          pathname: prevProps.location.pathname,
          children: prevProps.children,
          theme: this.state.theme
        },
        theme: newThemes[Math.floor(Math.random() * newThemes.length)]
      });
      setTimeout(() => {
        this.setState({
          prevPage: {}
        });
      }, pageTransitionTime);
    }
  }

  render() {
    const currentComponent = React.cloneElement(this.props.children, {
      cssVars: getCSSVars(this.state.theme),
      animatingIn: this.state.prevPage
    });

    const prevComponent =
      this.state.prevPage.children &&
      React.cloneElement(this.state.prevPage.children, {
        cssVars: getCSSVars(this.state.prevPage.theme),
        animatingOut: true
      });

    return (
      <div>
        {prevComponent && (
          <CustomProperties
            properties={getCSSVars(this.state.prevPage.theme)}
            key={this.state.prevPage.pathname}
          >
            <div className="page">
              {this.state.prevPage.pathname !== '/' && (
                <Header path={this.state.prevPage.pathname} />
              )}
              <main>{prevComponent}</main>
            </div>
          </CustomProperties>
        )}
        <CustomProperties
          properties={getCSSVars(this.state.theme)}
          key={this.props.location.pathname}
        >
          <div className={`page ${prevComponent ? 'page--slide-in-top' : ''}`}>
            {this.props.location.pathname !== '/' && (
              <Header path={this.props.location.pathname} />
            )}
            <main>{currentComponent}</main>
          </div>
          <AboutMe initialHidden={this.props.location.pathname === '/'} />
        </CustomProperties>
      </div>
    );
  }
}

export default ({ children }) => (
  <Location>
    {({ location }) => <Layout location={location}>{children}</Layout>}
  </Location>
);
