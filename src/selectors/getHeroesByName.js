import PropTypes from 'prop-types';
import {heroes} from '~data';

/**
 * Represents getHeroesByName selector
 * @constructor
 * @param {string} name
 * @return {function} getHeroesByName
 */
const getHeroesByName = name => {
  if (name === '') return [];

  name = name.toLowerCase();
  return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));
};

getHeroesByName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default getHeroesByName;
