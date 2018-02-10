import React, { Component } from "react"
import PresentationList from "./../components/PresentationList"
import Helmet from "react-helmet"

const links = [
  {
    text: "Keep your Redux store in check with redux-usage-report",
    to:
      "https://medium.com/about-codecademy/keep-your-large-redux-application-in-check-with-redux-usage-report-e2e4f31bb86f",
    external: true
  },

  {
    text: "Building animations in React from scratch",
    to:
      "https://medium.com/about-codecademy/building-animations-in-react-from-scratch-c66a582c9b65",
    external: true
  },
  {
    text: "What's the most developer friendly React animation library?",
    to:
      "https://www.freshtilledsoil.com/whats-the-most-developer-friendly-react-animation-library/",
    external: true
  },
  {
    text: "Performance audit of MFA.org",
    to: "https://www.freshtilledsoil.com/performance-audit-of-mfa-org/",
    external: true
  }
]
const Articles = ({ animatingOut }) => {
  return (
    <div>
      <Helmet title="Articles" />
      <PresentationList title="Articles" links={links} animatingOut={animatingOut} />
    </div>
  )
}

export default Articles
