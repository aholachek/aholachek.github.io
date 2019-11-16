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
    img: scorecardImg,
    description: 'I helped a grassroots political organization present their data in a more user-friendly way.'
  },
  {
    text: 'Redesigning the Astrophysics Data System',
    to: '/portfolio/redesigningADS',
    description: 'I worked on building a new version of the UI for the NASA/Astrophysics Data System.',
    img: bbbImg
  },
  {
    text: 'Going (briefly) viral with a reaction gif generator',
    to: '/portfolio/reactionGifGenerator',
    description: 'I made a fun side project that got mild traction on the internet for a few days.',
    img: gifImg
  },
  {
    text: 'Rethinking the ADS author network visualizations',
    to: '/portfolio/adsAuthorNetworks',
    description: 'I redesigned and rebuilt network visualizations in D3.',
    img: networkImg
  }
]
const Portfolio = ({ animatingOut }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Alex Holachek | Portfolio</title>
        <meta name="description" content="A colorful little portfolio of web development work" />
      </Helmet>
      <PresentationList
        title="Portfolio"
        links={links}
        animatingOut={animatingOut}
      />
    </Fragment>
  )
}

export default Portfolio
