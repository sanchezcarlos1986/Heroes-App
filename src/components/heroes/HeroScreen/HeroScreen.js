import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {useParams, Redirect} from 'react-router-dom';
import {getHeroById} from '~selectors';

/**
 * Represents HeroesScreen component
 * @constructor
 * @param {object} history History prop from router
 * @return {function} HeroesScreen
 */
export default function HeroScreen({history}) {
  const {heroId} = useParams();
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) return <Redirect to="/" />;

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  };

  const {
    superhero,
    publisher,
    alter_ego: alterEgo,
    first_appearance: firstAppearance,
    characters,
  } = hero;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroId}.jpg`}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          alt={superhero}
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Alter ego: </strong>
            {alterEgo}
          </li>
          <li className="list-group-item">
            <strong>Publisher: </strong>
            {publisher}
          </li>
          <li className="list-group-item">
            <strong>First Appareance: </strong>
            {firstAppearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button onClick={handleReturn} className="btn btn-outline-info">
          Return
        </button>
      </div>
    </div>
  );
}

HeroScreen.propTypes = {
  history: PropTypes.object.isRequired,
};
