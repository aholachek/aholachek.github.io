import React, { Component } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';
import { Flipper, Flipped } from 'react-flip-toolkit';

class AboutMe extends Component {
  state = {
    open: false
  };

  openModal = () => {
    this.setState({ open: true });
  };
  closeModal = e => {
    this.setState({ open: false });
    e.stopPropagation();
  };

  renderContents = () => {
    return (
      <Flipped flipId="modal">
        <div className="about-me__container">
          <button className="about-me__close-btn" onClick={this.closeModal}>
            <span className="sr-only">close</span>
            <svg width="50" height="50" viewBox="0 0 1792 1792">
              <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z" />
            </svg>
          </button>
          <div className="about-me__contents">
            <h1>Hi, thanks for visiting!</h1>
            <div className="about-me__links">
              <div>
                <a href="https://www.linkedin.com/in/alexholachek/">Linkedin</a>
              </div>
              <div>
                <a href="https://www.github.com/aholachek">Github</a>
              </div>
              <div>
                <a href="https://www.twitter.com/alexholachek">Twitter</a>
              </div>
            </div>

            <p>
              I'm a front end developer who likes building useful, user-friendly
              interfaces.{' '}
            </p>
            <p>
              I work at <a href="http://codecademy.com">Codecademy</a> building
              tools to teach people how to code.{' '}
            </p>

            <p>
              I recently had fun redesigning this portfolio website and &nbsp;
              <a href="https://github.com/aholachek/aholachek.github.io">
                rebuilding it using Gatsby.
              </a>
            </p>
          </div>
        </div>
      </Flipped>
    );
  };

  render() {
    return (
      <Flipper>
        <div
          className={`about-me__trigger-button ${
            this.state.open ? 'active' : ''
          }`}
          role={this.state.open ? '' : 'button'}
          tabindex="0"
          onClick={this.openModal}
        >
          {!this.state.open ? (
            <Flipped flipId="modal">
              <span className="about-me__question-mark">?</span>
            </Flipped>
          ) : (
            this.renderContents()
          )}
        </div>
      </Flipper>
    );
  }
}

export default AboutMe;
