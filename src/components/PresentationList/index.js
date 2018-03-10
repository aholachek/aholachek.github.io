import React, { Component } from "react"
import PropTypes from "prop-types"
import anime from "animejs"
import Card from "./Card"

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
      // .add({
      //   delay: 500,
      //   begin: () => {
      //     content.style.display = "block"
      //   },
      //   targets: content,
      //   translateY: ["50vh", 0],
      //   easing: "easeInSine",
      //   duration: 300
      // })
      .add({
        targets: content.querySelectorAll(".card"),
        opacity: [0, 1],
        delay: (x, i) => i * 200 + 500,
        duration: 250,
        easing: "easeInSine",
        offset: "-=100"
      })
  }

  render() {
    const { links, title, simple } = this.props
    return (
      <div className="page--list" ref={el => (this.el = el)}>
        <div>
          <div className="page--list__header">
            <h1>{title}</h1>
          </div>
          <div className="page--list__content">
            <div>
              <ul className={`card-grid ${simple ? 'card-grid--simple' : ''}`}
                ref={el => {
                  this.list = el
                }}
              >
                {links.map(l => <Card {...l}  simple={simple}/>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PresentationList
