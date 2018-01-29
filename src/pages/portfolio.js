import React, { Component } from "react"
import PresentationList from "./../components/PresentationList"

const links = [
  {
    text: "",
    to: ""
  }
]
const Portfolio = props => {
  return <PresentationList title="Portfolio" links={links} />
}

export default Portfolio
