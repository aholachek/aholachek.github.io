import React, { Component } from "react"
import PresentationList from "./../components/PresentationList"

const links = [
  {
    text: "Github",
    href: "https://github.com/aholachek",
    external: true
  },
  {
    text: "Codepen",
    href: "https://codepen.com/aholachek",
    external: true

  },
  {
    text: "D3 bl.ocks",
    href: "https://bl.ocks.org/aholachek",
    external: true
  }
]

const Code = props => {
  return <PresentationList title="Code" links={links} />
}

export default Code
