/* eslint-disable react/prop-types */
/* globals window CustomEvent */
import React, { createElement } from "react"
import createHistory from "history/createBrowserHistory"
import CustomProperties from "react-custom-properties"
import colorThemes from "./color-themes"
import Header from "./src/components/Header"
import AboutMe from "./src/components/AboutMe"

const historyExitingEventType = `history::exiting`

const getUserConfirmation = (pathname, callback) => {
  const event = new CustomEvent(historyExitingEventType, { detail: { pathname } })
  window.dispatchEvent(event)
  callback(true)
}
const history = createHistory({ getUserConfirmation })
// block must return a string to conform
history.block((location, action) => location.pathname)
exports.replaceHistory = () => history

const pageTransitionTime = 500

const getCSSVars = (d = {}) => {
  return {
    "--color": d.background === "lighter" ? d.darker : d.lighter,
    "--background-color": d.background === "lighter" ? d.lighter : d.darker,
    "--darker-color": d.darker,
    "--lighter-color": d.lighter
  }
}

class ReplaceComponentRenderer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { prevPageResources: {} }
    this._theme = colorThemes[Math.floor(Math.random() * colorThemes.length)]
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this._prevTheme = this._theme
      const newThemes = colorThemes.filter(t => t !== this._theme)
      this._theme = newThemes[Math.floor(Math.random() * newThemes.length)]
      this.setState({ prevPageResources: this.props.pageResources })
      setTimeout(() => {
        this.setState({
          prevPageResources: null
        })
      }, pageTransitionTime)
    }
  }

  render() {
    const CurrentComponent = this.props.pageResources.component
    const PrevComponent = this.state.prevPageResources && this.state.prevPageResources.component

    return (
      <div>
        {PrevComponent && (
          <CustomProperties properties={getCSSVars(this._prevTheme)}>
            <div className="page" key={this.state.prevPageResources.page.path}>
              {this.state.prevPageResources.page.path !== "/" && (
                <Header path={this.state.prevPageResources.page.path} />
              )}
              <main>
                <PrevComponent
                  {...this.props}
                  {...this.state.prevPageResources.json}
                  animatingOut
                  cssVars={getCSSVars(this._theme)}
                />
              </main>
            </div>
          </CustomProperties>
        )}
        <CustomProperties properties={getCSSVars(this._theme)}>
          <div
            className={`page ${PrevComponent ? "page--slide-in-top" : ""}`}
            key={this.props.pageResources.page.path}
          >
            {this.props.pageResources.page.path !== "/" && (
              <Header path={this.props.pageResources.page.path} />
            )}
            <main>
              <CurrentComponent
                {...this.props}
                {...this.props.pageResources.json}
                cssVars={getCSSVars(this._theme)}
                animatingIn={PrevComponent}
              />
            </main>
          </div>
          <AboutMe />
        </CustomProperties>
      </div>
    )
  }
}

// eslint-disable-next-line react/display-name
exports.replaceComponentRenderer = ({ props, loader }) => {
  if (props.layout) {
    return undefined
  }
  return createElement(ReplaceComponentRenderer, { ...props, loader })
}
