import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import "normalize.css"
import "./../styles/index.scss"

const TemplateWrapper = ({ children, location }) => (
  <div>
    <Helmet
      title="Alex Holachek"
      meta={[
        { name: "description", content: "Alex Holachek's website" },
        { name: "keywords", content: "front end development, ux" }
      ]}
    />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
