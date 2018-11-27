import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

class AboutMe extends Component {
  state = {
    open: false
  };

  openModal = () => {
    this.setState({ open: true });
  };
  closeModal = e => {
    this.setState({ open: false, closing: true });
    e.stopPropagation();
  };

  renderContents = () => {
    return (
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
              <a href="https://www.linkedin.com/in/alexholachek/">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  fixedWidth
                  title="LinkedIn"
                />
              </a>
            </div>
            <div>
              <a href="https://www.github.com/aholachek">
                <FontAwesomeIcon icon={faGithub} fixedWidth title="Github" />
              </a>
            </div>
            <div>
              <a href="https://www.twitter.com/alexholachek">
                <FontAwesomeIcon icon={faTwitter} fixedWidth title="Twitter" />
              </a>
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
            I recently had fun redesigning this portfolio website and{' '}
            <a href="https://github.com/aholachek/aholachek.github.io">
              rebuilding it using Gatsby.
            </a>
          </p>
        </div>
      </div>
    );
  };

  onAnimationComplete = el => {
    if (!this.state.open) {
      el.querySelector('.about-me__question-mark').style.opacity = 1;
    }
  };

  render() {
    const ButtonEl = this.state.open ? 'div' : 'button';
    return (
      <Flipper flipKey={this.state.open}>
        <Flipped
          flipId="modal"
          onStart={el => {
            el.querySelector('.about-me__question-mark').style.opacity = 0;
          }}
          onComplete={this.onAnimationComplete}
        >
          <ButtonEl
            className={`about-me__trigger-button ${
              this.state.open ? 'active' : ''
            }`}
            onClick={this.openModal}
          >
            <div>
              <span
                style={{ opacity: this.state.closing ? 0 : 1 }}
                className="about-me__question-mark"
              >
                ?
              </span>
              {this.state.open && this.renderContents()}
            </div>
          </ButtonEl>
        </Flipped>
      </Flipper>
    );
  }
}

export default AboutMe;
