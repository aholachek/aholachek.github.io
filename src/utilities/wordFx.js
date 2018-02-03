import anime from "animejs"
import charming from "charming"

/**
 * wordFx.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */

// From https://davidwalsh.name/javascript-debounce-function.
function debounce(func, wait, immediate) {
  var timeout
  return function() {
    var context = this,
      args = arguments
    var later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

// From http://snipplr.com/view/37687/random-number-float-generator/
function randomBetween(minValue, maxValue, precision = 2) {
  return parseFloat(
    Math.min(minValue + Math.random() * (maxValue - minValue), maxValue).toFixed(precision)
  )
}

let winsize = { width: window.innerWidth, height: window.innerHeight }

const icons = [
  "M11.4 10h2.7v7.6c0 3.4-1.6 4.6-4.3 4.6-.6 0-1.5-.1-2-.3l.3-2.2c.4.2.9.3 1.4.3 1.1 0 1.9-.5 1.9-2.4V10zm5.1 9.2c.7.4 1.9.8 3 .8 1.3 0 1.9-.5 1.9-1.3s-.6-1.2-2-1.7c-2-.7-3.3-1.8-3.3-3.6 0-2.1 1.7-3.6 4.6-3.6 1.4 0 2.4.3 3.1.6l-.6 2.2c-.5-.2-1.3-.6-2.5-.6s-1.8.5-1.8 1.2c0 .8.7 1.1 2.2 1.7 2.1.8 3.1 1.9 3.1 3.6 0 2-1.6 3.7-4.9 3.7-1.4 0-2.7-.4-3.4-.7l.6-2.3z",
  "M8 15l6-5.6V12l-4.5 4 4.5 4v2.6L8 17v-2zm16 2.1l-6 5.6V20l4.6-4-4.6-4V9.3l6 5.6v2.2z",
  "M7.5 15.1c1.5 0 1.7-.8 1.7-1.5 0-.6-.1-1.1-.1-1.7S9 10.7 9 10.2c0-2.1 1.3-3 3.4-3h.8v1.9h-.4c-1 0-1.3.6-1.3 1.6 0 .4.1.8.1 1.3 0 .4.1.9.1 1.5 0 1.7-.7 2.3-1.9 2.6 1.2.3 1.9.9 1.9 2.6 0 .6-.1 1.1-.1 1.5 0 .4-.1.9-.1 1.2 0 1 .3 1.6 1.3 1.6h.4v1.9h-.8c-2 0-3.3-.8-3.3-3 0-.6 0-1.1.1-1.7.1-.6.1-1.2.1-1.7 0-.6-.2-1.5-1.7-1.5l-.1-1.9zm17 1.7c-1.5 0-1.7.9-1.7 1.5s.1 1.1.1 1.7c.1.6.1 1.2.1 1.7 0 2.2-1.4 3-3.4 3h-.8V23h.4c1 0 1.3-.6 1.3-1.6 0-.4 0-.8-.1-1.2 0-.5-.1-1-.1-1.5 0-1.7.7-2.3 1.9-2.6-1.2-.3-1.9-.9-1.9-2.6 0-.6.1-1.1.1-1.5.1-.5.1-.9.1-1.3 0-1-.4-1.5-1.3-1.6h-.4V7.2h.8c2.1 0 3.4.9 3.4 3 0 .6-.1 1.1-.1 1.7-.1.6-.1 1.2-.1 1.7 0 .7.2 1.5 1.7 1.5v1.7z",
  "M22 19.4c.1 1.1.2 2.1.2 3.2 0 1.3-.7 2.2-1.7 2.3-.5.1-1.1 0-1.6-.2-1-.5-1.9-1.2-2.9-1.8-.5.4-1 .8-1.6 1.2-.3.2-.7.4-1 .5-1.8.8-3.3-.1-3.4-2.1 0-1 .1-2.1.2-3.2-.6-.2-1.2-.4-1.8-.8-.6-.3-1.1-.7-1.6-1.2-.9-.9-.8-2 .1-2.9.8-.9 1.9-1.3 3-1.7.1 0 .3-.1.4-.1-.1-.7-.2-1.5-.3-2.2 0-.6.1-1.3.2-1.9.3-1.1 1.3-1.6 2.5-1.3 1.2.3 2.1 1 2.9 1.7.2.1.3.3.4.4.8-.6 1.6-1.2 2.5-1.7.6-.4 1.3-.6 2-.4 1 .2 1.6 1.1 1.7 2.4v1.6c0 .5-.2 1-.3 1.6.6.2 1.1.4 1.7.7.8.4 1.6.8 2.1 1.6.5.7.5 1.5 0 2.2-.5.8-1.3 1.2-2.1 1.6-.6.1-1.1.3-1.6.5zm-5.8-.1c.3 0 .8-.1 1.2-.1.3 0 .5-.1.7-.4.5-.8 1-1.6 1.4-2.5.1-.2.1-.5 0-.6-.5-.9-1-1.7-1.5-2.5-.1-.2-.3-.3-.5-.3-.9 0-1.7 0-2.6-.1-.5 0-.9.2-1.2.7-.2.3-.4.6-.6 1-1.1 2-1.1 1.2 0 3.2 1.2 1.9.6 1.5 3.1 1.6zm-5.8-.8c.3-.8.6-1.6.9-2.3v-.4c-.3-.8-.6-1.5-.9-2.3-1 .3-2 .7-2.8 1.3-.9.7-.9 1.6 0 2.3.8.8 1.8 1.1 2.8 1.4zm11.3-5.1c-.4.9-.7 1.7-1 2.5 0 .1-.1.2 0 .2.3.8.6 1.6 1 2.6.9-.5 1.9-.9 2.7-1.4 1.1-.7 1.1-1.7 0-2.4-.8-.7-1.8-1-2.7-1.5zm-10.7-1c.9-.1 1.7-.2 2.5-.4.1 0 .2-.1.2-.1.5-.7 1-1.3 1.6-2-.8-.7-1.6-1.4-2.6-1.8-1.1-.4-1.8 0-2 1.2-.1 1 .1 2 .3 3.1zm10 0c0-.1.1-.3.1-.4.2-1 .4-2.1 0-3.1-.2-.7-.7-1-1.3-.9-1.3.2-2.2 1.1-3.1 1.9.5.7 1 1.3 1.5 1.9l.3.3c.8.1 1.6.2 2.5.3zm-10 7.2c-.2 1.1-.5 2.1-.2 3.2.2 1 .9 1.4 1.9 1.1 1.1-.3 1.9-1.1 2.7-1.8-.5-.7-1-1.3-1.6-2-.1-.1-.2-.2-.3-.2-.8 0-1.6-.1-2.5-.3zm5.6 2.5c.6.8 1.8 1.6 2.6 1.9 1 .3 1.7 0 1.9-1.1.2-1.1 0-2.1-.2-3.2-.9.1-1.8.1-2.6.4-.6.3-.9 1-1.3 1.5-.1.2-.2.3-.4.5zm.6-10.2c-.4-.5-.8-.9-1.2-1.4-.4.5-.7.9-1.2 1.4h2.4zm0 8.2h-2.3c.4.5.8.9 1.2 1.4.3-.5.7-.9 1.1-1.4zm-4.1-1c-.4-.7-.8-1.3-1.2-2.1-.2.6-.4 1.1-.6 1.7.5.2 1.1.3 1.8.4zm7-2.1l-1.2 2.1c.7-.1 1.2-.2 1.8-.3-.1-.6-.3-1.1-.6-1.8zm-8.2-2l1.2-2.1c-.7.1-1.2.2-1.8.3.2.7.3 1.2.6 1.8zm7-2.1c.2.4.4.7.6 1 .2.3.4.6.6 1 .2-.6.4-1.2.6-1.7-.6 0-1.1-.1-1.8-.3z",
  "M18 17.3c-1.1.7-2.4 1.5-3.5 2.2.4.9.4 1.8.1 2.7-.5 1.6-1.7 2.5-3.2 2.7-.4.1-.8 0-1.1-.1-.4-.1-.6-.4-.7-.7-.4-.9-.3-1.7.3-2.4.4-.4.8-.9 1.3-1.2.5-.4 1.2-.7 1.8-1.1.1-.1.2-.1.4-.2-.3-.2-.4-.4-.6-.4-.8-.5-1.6-1.1-2.3-1.8-.4-.4-.8-.8-1.1-1.3-.9-.7-1-1.7-.5-2.6.4-1 1.1-1.8 1.8-2.5 1.6-1.4 3.4-2.4 5.4-3.1 1.4-.5 2.8-.7 4.2-.5.4.2 1 .3 1.4.5 1.5.6 2.1 1.8 1.6 3.4-.4 1.3-1.2 2.4-2.4 3.1-1.6 1-3.2 1.4-5.1 1.1-.6-.1-1.1-.4-1.6-.9-.1-.2-.2-.4-.3-.5 0 0 0-.1.1-.2 0 0 .1 0 .2.1.8.8 1.7.9 2.6.7 1.7-.3 3.2-.9 4.3-2.2.4-.5.8-1.1 1-1.8.2-.8-.2-1.4-.9-1.8-.8-.4-1.6-.4-2.4-.3-2 .3-3.8 1.1-5.4 2.1-.9.5-1.7 1.1-2.3 1.9-.3.4-.5.8-.7 1.2-.3.8-.2 1.6.4 2.2.4.4.8.8 1.2 1.1.6.5 1.3 1.1 1.9 1.6.1 0 .2.1.3 0 .3-.2.5-.3.8-.4.9-.5 1.8-.9 2.8-1.1 0 .4.1.4.2.5 0-.1 0-.1 0 0zm-4.3 2.5c-.9.5-1.6 1-2.3 1.7-.4.4-.6.8-.7 1.3-.1.6.3.9.9.8.8-.2 1.4-.7 1.8-1.3.5-.8.5-1.5.3-2.5z",
]

class Shape {
  constructor(type, letterRect, options) {
    this.DOM = {}
    this.options = {
      shapeTypes: ["circle", "rect", "polygon"],
      shapeColors: ["#e07272", "#0805b5", "#49c6ff", "#8bc34a", "#1e1e21", "#e24e81", "#e0cd24"],
      shapeFill: true,
      shapeStrokeWidth: 1
    }
    Object.assign(this.options, options)
    this.type = type || this.options.shapeTypes[0]
    if (this.type !== "random" && !this.options.types.includes(this.type)) return
    if (this.type === "random")
      this.type = this.options.shapeTypes[randomBetween(0, this.options.shapeTypes.length - 1, 0)]
    this.letterRect = letterRect
    this.init()
  }
  init() {
    this.DOM.el = document.createElementNS("http://www.w3.org/2000/svg", "path")
    const d = icons[Math.floor(randomBetween(0, icons.length))]
    this.DOM.el.setAttribute("d", d)
    this.DOM.el.style.opacity = 0
    this.configureShape()

    if (this.options.shapeFill) {
      this.DOM.el.setAttribute(
        "fill",
        this.options.shapeColors[randomBetween(0, this.options.shapeColors.length - 1, 0)]
      )
    } else {
      this.DOM.el.setAttribute("fill", "none")
      this.DOM.el.setAttribute("stroke-width", this.options.shapeStrokeWidth)
      this.DOM.el.setAttribute(
        "stroke",
        this.options.shapeColors[randomBetween(0, this.options.shapeColors.length - 1, 0)]
      )
    }
  }
  configureShape() {
    const x = this.letterRect.left + this.letterRect.width / 2
    const y = this.letterRect.top + this.letterRect.height / 2
    this.DOM.el.dataset.x = x
    this.DOM.el.dataset.y = y
  }
  onResize(letterRect) {
    this.letterRect = letterRect
    this.configureShape()
  }
}

class Letter {
  constructor(el, svg, options) {
    this.DOM = {}
    this.DOM.el = el
    this.DOM.svg = svg
    svg.style.opacity = 0.6
    this.options = {
      totalShapes: 3
    }
    Object.assign(this.options, options)
    this.rect = this.DOM.el.getBoundingClientRect()
    this.totalShapes = this.options.totalShapes
    this.init()
    this.initEvents()
  }
  init() {
    this.shapes = []
    for (let i = 0; i <= this.totalShapes - 1; ++i) {
      const shape = new Shape("random", this.rect, this.options)
      this.shapes.push(shape)
      this.DOM.svg.appendChild(shape.DOM.el)
    }
  }
  initEvents() {
    window.addEventListener(
      "resize",
      debounce(() => {
        this.rect = this.DOM.el.getBoundingClientRect()
        for (let i = 0; i <= this.totalShapes - 1; ++i) {
          const shape = this.shapes[i]
          shape.onResize(this.rect)
        }
      }, 20)
    )
  }
}

class Word {
  constructor(el, options) {
    this.DOM = {}
    this.DOM.el = el
    this.options = {
      shapesOnTop: false
    }
    Object.assign(this.options, options)
    this.init()
    this.initEvents()
  }
  init() {
    this.createSVG()
    charming(this.DOM.el)
    this.letters = []
    Array.from(this.DOM.el.querySelectorAll("span")).forEach(letter =>
      this.letters.push(new Letter(letter, this.DOM.svg, this.options))
    )
  }
  initEvents() {
    window.addEventListener(
      "resize",
      debounce(() => {
        winsize = { width: window.innerWidth, height: window.innerHeight }
        this.DOM.svg.setAttribute("width", `${winsize.width}px`)
        this.DOM.svg.setAttribute("height", `${winsize.width}px`)
        this.DOM.svg.setAttribute("viewbox", `0 0 ${winsize.width} ${winsize.height}`)
      }, 20)
    )
  }
  createSVG() {
    this.DOM.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    this.DOM.svg.setAttribute("class", "shapes")
    this.DOM.svg.setAttribute("width", `${winsize.width}px`)
    this.DOM.svg.setAttribute("height", `${winsize.width}px`)
    this.DOM.svg.setAttribute("viewbox", `0 0 ${winsize.width} ${winsize.height}`)
    if (this.options.shapesOnTop) {
      this.DOM.el.parentNode.insertBefore(this.DOM.svg, this.DOM.el.nextSibling)
    } else {
      this.DOM.el.parentNode.insertBefore(this.DOM.svg, this.DOM.el)
    }
  }
  show(config) {
    return this.toggle("show", config)
  }
  hide(config) {
    return this.toggle("hide", config)
  }
  toggle(action = "show", config) {
    return new Promise((resolve, reject) => {
      const toggleNow = () => {
        for (let i = 0, len = this.letters.length; i <= len - 1; ++i) {
          this.letters[i].DOM.el.style.opacity = action === "show" ? 1 : 0
        }
        resolve()
      }

      if (config && Object.keys(config).length !== 0) {
        if (config.shapesAnimationOpts) {
          for (let i = 0, len = this.letters.length; i <= len - 1; ++i) {
            const letter = this.letters[i]
            setTimeout(
              (function(letter) {
                return () => {
                  config.shapesAnimationOpts.targets = letter.shapes.map(shape => shape.DOM.el)
                  anime.remove(config.shapesAnimationOpts.targets)
                  anime(config.shapesAnimationOpts)
                }
              })(letter),
              config.lettersAnimationOpts && config.lettersAnimationOpts.delay
                ? config.lettersAnimationOpts.delay(letter.DOM.el, i)
                : 0
            )
          }
        }
        if (config.lettersAnimationOpts) {
          config.lettersAnimationOpts.targets = this.letters.map(letter => letter.DOM.el)
          config.lettersAnimationOpts.complete = () => {
            if (action === "hide") {
              for (let i = 0, len = config.lettersAnimationOpts.targets.length; i <= len - 1; ++i) {
                config.lettersAnimationOpts.targets[i].style.transform = "none"
              }
            }
            resolve()
          }
          anime(config.lettersAnimationOpts)
        } else {
          toggleNow()
        }
      } else {
        toggleNow()
      }
    })
  }
}

export default Word
