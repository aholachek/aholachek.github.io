import React, { Component } from "react"
import PresentationList from "../components/PresentationList"
import Helmet from "react-helmet"

const links = [
  {
    text: "",
    to: ""
  }
]
const Portfolio = ({ animatingOut }) => {
  return (
    <div>
      <Helmet title="Portfolio" />
      <PresentationList title="Portfolio" links={links} animatingOut={animatingOut} />
    </div>
  )
}

export default Portfolio
