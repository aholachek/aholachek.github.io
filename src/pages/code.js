import React, { Fragment } from 'react'
import PresentationList from './../components/PresentationList'
import Helmet from 'react-helmet'

const links = [
  {
    text: 'Github',
    to: 'https://github.com/aholachek',
    description: 'A few interesting open source libraries',
    external: true
  },
  {
    text: 'Codepen',
    to: 'https://codepen.io/aholachek',
    description: 'Tiny front-end projects and brainstorms',
    external: true
  },
  {
    text: 'D3 bl.ocks',
    to: 'https://bl.ocks.org/aholachek',
    description: 'Experiments with visualization techniques',
    external: true
  }
]

const Code = ({ animatingOut }) => {
  return (
    <Fragment>
      <Helmet title="Alex Holachek | Code" />
      <PresentationList
        title="Code"
        links={links}
        animatingOut={animatingOut}
        simple={true}
      />
    </Fragment>
  )
}

export default Code
