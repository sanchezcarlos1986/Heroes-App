import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {useLocation} from 'react-router-dom';
import queryString from 'query-string';
import {HeroCard} from '~components';
import {useForm} from '~hooks';
import {getHeroesByName} from '~selectors';

/**
 * Represents SearchScreen component
 * @constructor
 * @param {object} history Router's history
 * @return {function} SearchScreen
 */
export default function SearchScreen({history}) {
  const {search} = useLocation();
  const {q = ''} = queryString.parse(search);

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
  const [values, handleInputChange] = useForm({searchText: q});

  const {searchText} = values;

  const handleSearch = e => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <div>
      <h1>SearchScreen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              name="searchText"
              type="text"
              autoComplete="off"
              placeholder="Find your hero!"
              className="form-control"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn m-t1 btn-block btn-outline-primary">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Your heroes</h4>

          {q === '' ? (
            <div className="alert alert-info">Search a hero</div>
          ) : null}

          {q !== '' && heroesFiltered.length === 0 ? (
            <div className="alert alert-info">
              {`We couln't find`} <strong>{q}</strong>
            </div>
          ) : null}

          {heroesFiltered.map(hero => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
}

SearchScreen.propTypes = {
  history: PropTypes.object,
};
