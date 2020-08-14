import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {getHeroesByPublisher} from '~selectors';
import {HeroCard} from '~components';

/**
 * Represents HeroList component
 * @constructor
 * @param {string} publisher publisher to filter heroes from heroes array
 * @return {function} HeroList
 */
export default function HeroList({publisher}) {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <ul className="card-columns">
      {heroes.map(hero => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </ul>
  );
}

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired,
};
