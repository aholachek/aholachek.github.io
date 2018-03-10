import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const renderSkillList = skills => (
  <ul className="card__skills">
    {skills.map((s, i) => (
      <li>
        {s}
        {i === skills.length - 1 ? '' : ','}
      </li>
    ))}
  </ul>
);

const renderDescription = description => (
  <p className="card__description">{description}</p>
);

const Card = ({ skills, text, img, external, to, description, simple }) => {
  const content = (
    <div>
      <div className="card__header">
        <h2>{text}</h2>
        {!!skills && renderSkillList(skills)}
        {!!description && renderDescription(description)}
      </div>
      {!!img && <img className="card__img" src={img} />}
    </div>
  );
  return (
    <li
      style={{ opacity: 0 }}
      key={to}
      className={`card ${simple ? 'card--simple' : ''}`}
    >
      {external ? <a href={to}>{content}</a> : <Link to={to}>{content}</Link>}
    </li>
  );
};

Card.defaultProps = {};
Card.propTypes = {};

export default Card;
