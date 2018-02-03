import React, { Component } from "react"
import PropTypes from "prop-types"
import anime from "animejs"

class Post extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
  }

  componentDidMount() {
    if (this.props.animatingOut) return
    const content = this.el.querySelector(".page--post__content")
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
        offset: "-=100"
      })
  }

  render() {
    const { title, children } = this.props
    return (
      <div className="page--post" ref={el => (this.el = el)}>
        <div>
          <div className="page--post__header">
            <h1>{title}</h1>
          </div>
          <div className="page--post__content" style={{ display: "none" }}>
            <div>{children}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post
