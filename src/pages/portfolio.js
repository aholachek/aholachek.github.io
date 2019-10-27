import React, { Fragment } from 'react'
import PresentationList from '../components/PresentationList'
import Helmet from 'react-helmet'

import bbbImg from './portfolio/redesigningADS/assets/bbb_full_page.png'
import scorecardImg from './portfolio/progressiveMass/assets/prog-mass-thumbnail.png'
import networkImg from './portfolio/adsAuthorNetworks/assets/network-thumbnail.png'
import gifImg from './portfolio/reactionGifGenerator/assets/reaction-gif-thumbnail.gif'

const links = [
  {
    text: 'Creating a Scorecard for Massachussetts Legislators',
    to: '/portfolio/progressiveMass',
    skills: ['React', 'APIs', 'UI Design'],
    img: scorecardImg
  },
  {
    text: 'Redesigning the Astrophysics Data System',
    to: '/portfolio/redesigningADS',
    skills: ['React', 'Redux', 'UI Design'],
    img: bbbImg
  },
  {
    text: 'Going (briefly) viral with a reaction gif generator',
    to: '/portfolio/reactionGifGenerator',
    skills: ['Vue', 'Node.js'],
    img: gifImg
  },
  {
    text: 'Rethinking the ADS author network visualizations',
    to: '/portfolio/adsAuthorNetworks',
    skills: ['D3', 'Python', 'Visualization Design'],
    img: networkImg
  }
]
const Portfolio = ({ animatingOut }) => {
  return (
    <Fragment>
      <Helmet title="Alex Holachek | Portfolio" />
      <PresentationList
        title="Portfolio"
        links={links}
        animatingOut={animatingOut}
      />
    </Fragment>
  )
}

export default Portfolio
