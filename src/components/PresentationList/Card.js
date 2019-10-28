import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const renderDescription = description => (
  <p
    className="card__description"
    dangerouslySetInnerHTML={{ __html: description }}
  />
)

const Card = ({
  skills,
  text,
  img,
  external,
  to,
  description,
  simple,
  tag
}) => {
  const content = (
    <div>
      <div className="card__padding">
        {tag && <div className="card__tag">{tag}</div>}

        <div className="card__header">
          <h2>{text}</h2>
          {!!description && renderDescription(description)}
        </div>
        {!!img && <img className="card__img" src={img} />}
      </div>
    </div>
  )
  return (
    <li
      style={{ opacity: 0 }}
      key={to}
      className={`card ${simple ? 'card--simple' : ''}`}
    >
      {external ? <a href={to}>{content}</a> : <Link to={to}>{content}</Link>}
    </li>
  )
}

Card.defaultProps = {}
Card.propTypes = {}

export default Card
