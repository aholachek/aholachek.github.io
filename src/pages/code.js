import React, { Component } from "react"
import PresentationList from "./../components/PresentationList"
import Helmet from "react-helmet"

const links = [
  {
    text: "Github",
    to: "https://github.com/aholachek",
    external: true
  },
  {
    text: "Codepen",
    to: "https://codepen.io/aholachek",
    external: true
  },
  {
    text: "D3 bl.ocks",
    to: "https://bl.ocks.org/aholachek",
    external: true
  }
]

const Code = ({ animatingOut }) => {
  return (
    <div>
      <Helmet title="Alex Holachek | Code" />
      <PresentationList title="Code" links={links} animatingOut={animatingOut} />
    </div>
  )
}

export default Code
