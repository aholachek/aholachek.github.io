/* eslint-disable react/prop-types */
/* globals window CustomEvent */
import React, { createElement } from "react"
import createHistory from "history/createBrowserHistory"
import CustomProperties from "react-custom-properties"
import colorThemes from "./color-themes"
import Header from "./src/components/Header"

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

const pageTransitionTime = 400

class ReplaceComponentRenderer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { prevPageResources: {} }
    const landingPageThemes = colorThemes.filter(t => t.landing)
    this._theme = landingPageThemes[Math.floor(Math.random() * landingPageThemes.length)]
    // hehehehehe
    console.log('theme', this._theme)
    window.theme = this._theme
  }

  // listenerHandler(event) {
  //   const nextPageResources = this.props.loader.getResourcesForPathname(
  //     event.detail.pathname,
  //     nextPageResources => this.setState({ nextPageResources })
  //   ) || {}
  //   this.setState({ exiting: true, nextPageResources })
  // }

  currentAnimation = null

  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this._prevTheme = this._theme
      this._theme = colorThemes[Math.floor(Math.random() * colorThemes.length)]
      // hehehehehe
      window.theme = this._theme
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
          <CustomProperties
            properties={{
              "--color": this._prevTheme.color,
              "--background-color": this._prevTheme.backgroundColor
            }}
          >
            <div className="page" key={this.state.prevPageResources.page.path}>
              {this.state.prevPageResources.page.path !== "/" && <Header />}
              <PrevComponent {...this.props} {...this.state.prevPageResources.json} animatingOut />
            </div>
          </CustomProperties>
        )}
        <CustomProperties
          properties={{
            "--color": this._theme.color,
            "--background-color": this._theme.backgroundColor
          }}
        >
          <div
            className={`page ${PrevComponent ? "page--slide-in-top" : ""}`}
            key={this.props.pageResources.page.path}
          >
            {this.props.pageResources.page.path !== "/" && <Header />}
            <CurrentComponent {...this.props} {...this.props.pageResources.json} />
          </div>
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
