import React, { Component } from "react"
import PresentationList from "./../components/PresentationList"

const links = [
  {
    text: "",
    to: ""
  }
]
const Articles = props => {
  return <PresentationList title="Articles" links={links} />
}


export default Articles
