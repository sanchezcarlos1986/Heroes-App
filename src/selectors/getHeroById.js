import PropTypes from 'prop-types';
import {heroes} from '~data';

/**
 * Represents getHeroById selector
 * @constructor
 * @param {string} id Id to find hero from heroes array
 * @return {function} getHeroById
 */
const getHeroById = id => heroes.find(hero => hero.id === id);

getHeroById.propTypes = {
  id: PropTypes.string.isRequired,
};

export default getHeroById;
