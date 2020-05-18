import React, { Fragment } from 'react'
import PresentationList from './../components/PresentationList'
import {Helmet} from 'react-helmet'

const links = [
  {
    tag: 'React Europe 2020',
    text:
      'Beyond Responsive Design: Building Mobile Optimized Web apps in React',
    to:
      'https://www.youtube.com/watch?v=W6_KxNvRxr4&list=PLCC436JpVnK0Q4WHoB85ZYBwcCyTaMgAl&index=9&t=0s',
    external: true,
    description:
      'A talk about creating seamless user experiences on the mobile web'
  },
  {
    tag: 'React Conf 2019',
    text: 'Mobile-First Animations in React',
    to: 'https://youtu.be/JDDxR1a15Yo?t=10664',
    external: true,
    description: 'Using animations to create a native feel on the mobile web'
  },
  {
    tag: 'CSS Tricks',
    text: 'Better Form Inputs for Better Mobile UX',
    to:
      'https://css-tricks.com/better-form-inputs-for-better-mobile-user-experiences/',
    external: true,
    description:
      'Showcasing a tool I made to preview form inputs on mobile devices'
  },
  {
    tag: 'CSS Tricks',
    text: 'Building a Complex UI Animation In React ',
    to:
      'https://css-tricks.com/building-a-complex-ui-animation-in-react-simply/',
    external: true,
    description: 'Building an animated navigation menu component'
  },
  {
    tag: 'React NYC meetup',
    text: 'React & the FLIP Technique',
    to: 'https://www.youtube.com/watch?v=s06Z_e8ac0Y',
    external: true,
    description:
      'Using the FLIP animation technique to create advanced UI animation effects'
  }
]
const Articles = ({ animatingOut }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Alex Holachek | Talks & Articles</title>
        <meta
          name="description"
          content="A colorful little portfolio of web development work"
        />
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
