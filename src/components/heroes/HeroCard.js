import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

/**
 * Represents HeroCard component
 * @constructor
 * @param {string} id
 * @param {string} superhero
 * @param {string} alter_ego
 * @param {string} first_appearance
 * @param {string} characters
 * @return {function} HeroCard
 */
export default function HeroCard({
  id,
  superhero,
  alter_ego: alterEgo,
  first_appearance: firstAppearance,
  characters,
}) {
  return (
    <li className="card ms-3" style={{maxWidth: 540}}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`./assets/heroes/${id}.jpg`}
            className="card-img"
            alt={superhero}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <div className="card-text">{alterEgo}</div>
            {alterEgo !== characters ? (
              <p className="card-text">{characters}</p>
            ) : null}
            <p className="card-text">
              <small className="text-muted">{firstAppearance}</small>
            </p>
            <Link to={`/hero/${id}`}>Más...</Link>
          </div>
        </div>
      </div>
    </li>
  );
}

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  alter_ego: PropTypes.string.isRequired,
  first_appearance: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
};
