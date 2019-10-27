import React, { Fragment } from 'react'
import PresentationList from './../components/PresentationList'
import Helmet from 'react-helmet'

const links = [
  {
    tag: 'React Conf 2019',
    text: 'Building Mobile-First Animations in React',
    to:
      'https://youtu.be/JDDxR1a15Yo?t=10664',
    external: true,
    description: 'A talk I gave about using animations to create a native feel on the mobile web'
  },
  {
    tag: 'CSS Tricks',
    text: 'Building a Complex UI Animation In React ',
    to:
      'https://css-tricks.com/building-a-complex-ui-animation-in-react-simply/',
    external: true,
    description:
      'An article I wrote about building an animated navigation menu component'
  },
  {
    tag: 'React NYC meetup',
    text: 'React & the FLIP Technique',
    to: 'https://www.youtube.com/watch?v=s06Z_e8ac0Y',
    external: true,
    description: 'A talk I gave at React NYC about the FLIP animation technique'
  },
  {
    tag: 'Medium',
    text: 'Building Animations in React from Scratch',
    to:
      'https://medium.com/about-codecademy/building-animations-in-react-from-scratch-c66a582c9b65',
    external: true,
    description: 'An article I wrote about hacking React lifecycle events to create advanced effects'
  }
]
const Articles = ({ animatingOut }) => {
  return (
    <Fragment>
      <Helmet title="Alex Holachek | Talks & Articles" />
      <PresentationList
        title="Talks & Articles"
        links={links}
        animatingOut={animatingOut}
      />
    </Fragment>
  )
}

export default Articles
