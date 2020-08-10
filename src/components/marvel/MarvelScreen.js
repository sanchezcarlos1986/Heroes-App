import React from 'react';
import {HeroList} from '~components';
import {PUBLISHERS} from '~helpers/constants';

/**
 * Represents MarvelScreen component
 * @constructor
 * @return {function} MarvelScreen
 */
export default function MarvelScreen() {
  return (
    <div>
      <h1>MarvelScreen</h1>
      <HeroList publisher={PUBLISHERS.MARVEL_COMICS} />
    </div>
  );
}
