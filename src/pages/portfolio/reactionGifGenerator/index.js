import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Post from '../../../components/Post'

import unimpressedGif from './assets/reaction-gif-thumbnail.gif'

class ReactionGifGeneratorPage extends Component {
  render() {
    return (
      <Post title="Reaction GIF Generator">
        <img
          src={unimpressedGif}
          alt="a screenshot from the reaction gif generator"
          style={{
            maxWidth: '40rem',
            height: 'auto',
            margin: '3rem auto 2rem auto',
            display: 'block'
          }}
        />
        <p>
          Just for fun, I built a small app in Vue.js that allowed you to take a
          selfie to find an appropriate reaction gif. It ended up getting
          featured on websites such as{' '}
          <a href="https://mashable.com/2017/01/31/selfie-emotion-gif-reaction-generator/">
            Mashable
          </a>.
        </p>
        <p>
          I built it using the Oxford Emotion API, the Giphy API, and HTML5
          webcam access
        </p>
        <p>
          Unfortunately, free access to the Oxford Emotion API is no more and so
          the app is no longer working, but here's{' '}
          <a href="https://github.com/aholachek/gif-search">
            {' '}
            the front-end code.
          </a>
        </p>
      </Post>
    )
  }
}

export default ReactionGifGeneratorPage
