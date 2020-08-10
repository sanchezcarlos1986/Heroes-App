import React from 'react';
import {HeroList} from '~components';
import {PUBLISHERS} from '~helpers/constants';

/**
 * Represents DcScreen component
 * @constructor
 * @return {function} DcScreen
 */
export default function DcScreen() {
  return (
    <div>
      <h1>DcScreen</h1>
      <HeroList publisher={PUBLISHERS.DC_COMICS} />
    </div>
  );
}
