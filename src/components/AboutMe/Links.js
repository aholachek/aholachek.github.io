import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faTwitter,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

const AboutMeLinks = ({}) => {
  return (
    <div className="about-me__links">
      <div>
        <a href="https://www.linkedin.com/in/alexholachek/">
          <FontAwesomeIcon icon={faLinkedin} fixedWidth title="LinkedIn" />
        </a>
      </div>
      <div>
        <a href="https://www.github.com/aholachek">
          <FontAwesomeIcon icon={faGithub} fixedWidth title="Github" />
        </a>
      </div>
      <div>
        <a href="https://www.twitter.com/alex_holachek">
          <FontAwesomeIcon icon={faTwitter} fixedWidth title="Twitter" />
        </a>
      </div>
    </div>
  )
}

AboutMeLinks.defaultProps = {}
AboutMeLinks.propTypes = {}

export default AboutMeLinks
