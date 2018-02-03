import React, { Component } from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import anime from "animejs"

class PresentationList extends Component {
  static propTypes = {
    title: PropTypes.string,
    links: PropTypes.array,
    animatingOut: PropTypes.bool
  }

  state = {}

  componentDidMount() {
    if (this.props.animatingOut) return
    const content = this.el.querySelector(".page--list__content")
    anime
      .timeline()
      .add({
        delay: 500,
        begin: () => {
          content.style.display = "block"
        },
        targets: content,
        translateY: ["50vh", 0],
        opacity: [0, 1],
        easing: "easeInSine",
        duration: 300
      })
      .add({
        targets: content.querySelectorAll("li"),
        opacity: [0, 1],
        delay: (x, i) => i * 200,
        duration: 250,
        easing: "easeInSine",
        offset: '-=100'
      })
  }

  render() {
    const { links, title } = this.props
    console.log(links)
    return (
      <div className="page--list" ref={el => (this.el = el)}>
        <div>
          <div className="page--list__header">
            <h1>{title}</h1>
          </div>
          <div className="page--list__content" style={{ display: "none" }}>
            <ul
              ref={el => {
                this.list = el
              }}
            >
              {links.map(l => (
                <li style={{ opacity: 0 }}>
                  {l.external ? (
                    <a href={l.to}>{l.text}</a>
                  ) : (
                    <Link to={l.to}>
                      {l.text}
                      {!!l.img && <img src={l.img} />}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PresentationList
