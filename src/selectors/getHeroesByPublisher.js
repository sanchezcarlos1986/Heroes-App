import PropTypes from 'prop-types';
import {PUBLISHERS} from '~helpers/constants';
import {heroes} from '~data';

/**
 * Represents getHeroesByPublisher selector
 * @constructor
 * @param {string} publisher publisher to filter heroes from heroes array
 * @return {function} getHeroesByPublisher
 */
const getHeroesByPublisher = publisher => {
  const validPublishers = [PUBLISHERS.DC_COMICS, PUBLISHERS.MARVEL_COMICS];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher ${publisher} not found.`);
  }

  return heroes.filter(hero => hero.publisher === publisher);
};

getHeroesByPublisher.propTypes = {
  publisher: PropTypes.string.isRequired,
};

export default getHeroesByPublisher;
