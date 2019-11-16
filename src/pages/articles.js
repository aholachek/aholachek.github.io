import React, { Fragment } from 'react'
import PresentationList from './../components/PresentationList'
import Helmet from 'react-helmet'

const links = [
  {
    tag: 'React Conf 2019',
    text: 'Mobile-First Animations in React',
    to:
      'https://youtu.be/JDDxR1a15Yo?t=10664',
    external: true,
    description: 'Using animations to create a native feel on the mobile web'
  },
  {
    tag: 'CSS Tricks',
    text: 'Building a Complex UI Animation In React ',
    to:
      'https://css-tricks.com/building-a-complex-ui-animation-in-react-simply/',
    external: true,
    description:
      'Building an animated navigation menu component'
  },
  {
    tag: 'React NYC meetup',
    text: 'React & the FLIP Technique',
    to: 'https://www.youtube.com/watch?v=s06Z_e8ac0Y',
    external: true,
    description: 'Using the FLIP animation technique to create advanced UI animation effects'
  },
  {
    tag: 'Medium',
    text: 'Building Animations in React from Scratch',
    to:
      'https://medium.com/about-codecademy/building-animations-in-react-from-scratch-c66a582c9b65',
    external: true,
    description: 'Hacking React lifecycle events to create advanced effects'
  }
]
const Articles = ({ animatingOut }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Alex Holachek | Talks & Articles</title>
        <meta name="description" content="A colorful little portfolio of web development work" />
      </Helmet>
      <PresentationList
        title="Talks & Articles"
        links={links}
        animatingOut={animatingOut}
      />
    </Fragment>
  )
}

export default Articles
