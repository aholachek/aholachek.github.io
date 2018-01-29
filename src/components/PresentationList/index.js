import React, { Component } from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"

class PresentationList extends Component {
  static propTypes = {
    title: PropTypes.string,
    links: PropTypes.array
  }

  state = {}

  render() {
    const { links, title } = this.props
    return (
      <div className="page--presentation-list">
        <div>
          <h1>{title}</h1>
          <ul
            ref={el => {
              this.list = el
            }}
          >
            {links.map(l => (
              <li>
                {l.external ? <a href={l.href}>{l.text}</a> : <Link to={l.href}>{l.text}</Link>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default PresentationList
