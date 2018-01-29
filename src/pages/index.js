import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import anime from "animejs"
import animateInList from "./../utilities/animate-in-list"
import Word from "./../utilities/WordFx"

function randomBetween(minValue, maxValue, precision = 2) {
  return parseFloat(
    Math.min(minValue + Math.random() * (maxValue - minValue), maxValue).toFixed(precision)
  )
}

const entryAnimation = {
  options: {
    shapeColors: ["hsla(0, 0%, 100%, .8)", "hsla(0, 0%, 0%, .6)"],
    shapesOnTop: false
  },
  show: {
    lettersAnimationOpts: {
      duration: 400,
      delay: (t, i) => i * 60,
      easing: "easeOutExpo",
      opacity: {
        value: [0, 1],
        duration: 100,
        easing: "linear"
      },
      translateY: (t, i) => (i % 2 ? [anime.random(-350, -300), 0] : [anime.random(300, 350), 0])
    },
    shapesAnimationOpts: {
      duration: 600,
      delay: (t, i) => i * 30,
      easing: "easeOutExpo",
      translateX: t => [t.dataset.x, anime.random(-200, 200) + parseFloat(t.dataset.x)],
      translateY: t => [t.dataset.y, anime.random(-200, 200) + parseFloat(t.dataset.y)],
      scale: () => [randomBetween(0.5, 3), randomBetween(0.5, 3)],
      rotate: () => [0, anime.random(-16, 16)],
      opacity: [
        { value: 1, duration: 1, easing: "linear" },
        { value: 0, duration: 500, delay: 250, easing: "easeOutQuad" }
      ]
    }
  }
}

class IndexPage extends Component {
  state = {
    first: true
  }
  componentDidMount() {
    if (this.props.animatingOut) return
    const title = new Word(this.title, entryAnimation.options)
    title.show(entryAnimation.show)
    anime({
      targets : this.title,
      scale : [1,.5],
      delay : 1000
    })
    animateInList(this.links, 1000)
  }

  render() {
    return (
      <div className="page--landing__content">
        <div>
          <h1
            className="page--landing__title"
            ref={el => {
              this.title = el
            }}
          >
            Alex&nbsp;Holachek
          </h1>
          <ul className="page--landing__links" ref={el => (this.links = el)}>
            <li style={{ opacity: this.props.animatingOut ? 1 : 0 }}>
              <Link to="/code">
                <h2>Code</h2>
              </Link>
            </li>
            <li style={{ opacity: this.props.animatingOut ? 1 : 0 }}>
              <Link to="/portfolio">
                <h2>Portfolio</h2>
              </Link>
            </li>
            <li style={{ opacity: this.props.animatingOut ? 1 : 0 }}>
              <Link to="/articles">
                <h2>Articles</h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default IndexPage
