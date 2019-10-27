import React, { Component } from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import anime from 'animejs'
import animateInList from './../utilities/animate-in-list'
import Word from '../utilities/WordFx'
import icons from '../utilities/icons'

function randomBetween(minValue, maxValue, precision = 2) {
  return parseFloat(
    Math.min(
      minValue + Math.random() * (maxValue - minValue),
      maxValue
    ).toFixed(precision)
  )
}

const entryAnimation = {
  options: {
    shapeColors: [],
    shapesOnTop: false
  },
  show: {
    lettersAnimationOpts: {
      duration: 600,
      delay: (t, i) => i * 50 + 400,
      easing: 'easeOutExpo',
      opacity: {
        value: [0, 1],
        duration: 100,
        easing: 'linear'
      },
      translateY: (t, i) =>
        i % 2 ? [anime.random(-300, 300), 0] : [anime.random(400, 400), 0]
    },
    shapesAnimationOpts: {
      duration: 1700,
      delay: (t, i) => i * 30,
      elasticity: 500,
      translateX: t => [
        t.dataset.x,
        anime.random(-500, 500) + parseFloat(t.dataset.x)
      ],
      translateY: t => [
        t.dataset.y,
        anime.random(-500, 500) + parseFloat(t.dataset.y)
      ],
      scale: () => [randomBetween(0.8, 3), randomBetween(0.5, 5)],
      rotate: () => [0, anime.random(-16, 16)],
      opacity: [
        { value: 1, duration: 1, easing: 'linear' },
        { value: 0, duration: 150, delay: 1000, easing: 'easeOutQuad' }
      ]
    }
  }
}

class IndexPage extends Component {
  state = {
    first: true
  }
  componentDidMount() {
    if (this.props.animatingOut || typeof window === 'undefined') return

    function animate() {
      entryAnimation.options.shapeColors = [this.props.cssVars['--color']]

      const buttonEl = document.querySelector('.about-me__trigger-button')
      buttonEl.style.opacity = 0

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
          scale: 0.45,
          duration: 400,
          easing: 'easeInOutSine'
        })
          .finished.then(() => animateInList(this.links))
          .then(() => {
            anime({
              targets: buttonEl,
              opacity: 1,
              translateY: [60, 0],
              delay: 1000,
              duration: 800
            })
          })
      }, 1700)
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
                <h2>Talks & articles</h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default IndexPage
