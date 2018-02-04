import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import anime from "animejs"
import animateInList from "./../utilities/animate-in-list"
import Word from "../utilities/WordFx"
import icons from "../utilities/icons"

function randomBetween(minValue, maxValue, precision = 2) {
  return parseFloat(
    Math.min(minValue + Math.random() * (maxValue - minValue), maxValue).toFixed(precision)
  )
}

function getRandomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

const entryAnimation = {
  options: {
    shapeColors: [],
    shapesOnTop: false
  },
  show: {
    lettersAnimationOpts: {
      duration: 600,
      delay: (t, i) => i * 60,
      easing: "easeOutExpo",
      opacity: {
        value: [0, 1],
        duration: 100,
        easing: "linear"
      },
      translateY: (t, i) => (i % 2 ? [anime.random(-350, 350), 0] : [anime.random(450, 450), 0])
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
        { value: 0, duration: 100, delay: 400, easing: "easeOutQuad" }
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

    function animate() {
      entryAnimation.options.shapeColors = [this.props.cssVars["--color"]]

      const rect = this.title.getBoundingClientRect()
      const translateY = window.innerHeight / 2 - rect.height / 2 - rect.y
      const translateX = window.innerWidth / 2 - rect.width / 2 - rect.x

      anime
        .timeline()
        .add({
          targets: this.title,
          translateY,
          translateX,
          duration: 1
        })
        .add({
          targets: this.title,
          duration: 1,
          opacity: 1
        })
        .finished.then(() => {
          const title = new Word(this.title, entryAnimation.options)
          title.show(entryAnimation.show)
        })

      setTimeout(() => {
        anime({
          targets: this.title,
          translateY: 0,
          translateX: 0,
          scale: 0.4,
          duration: 200,
          easing: "easeInOutSine"
        })
          .finished.then(() => animateInList(this.links))
      }, 1250)
    }

    animate = animate.bind(this)
    if (this.props.animatingIn) {
      setTimeout(animate, 400)
    } else animate()
  }

  render() {
    return (
      <div
        className="page--landing"
        ref={el => {
          this.el = el
        }}
      >
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
