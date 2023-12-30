import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './searchBar.css';

function SearchBar({ searchUrl }) {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch (e.target.value);
  }


  return (
    <div className="header-controls-pic header-controls-search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate(searchUrl + '?q=' + search);
        }}
        className={`header-controls-search-form form-inline ${show ? 'control-show' : 'invisible'}`}
      >
        <input
          className="form-control control-show"
          placeholder="Поиск"
          name="q"
          value={search}
          onChange={handleChange}
        />
      </form>
      <img
        src="/img/search.png"
        alt="Поиск"
        title="Поиск"
        onClick={() => setShow((prev) => !prev)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  searchUrl: PropTypes.string.isRequired,
};

export default SearchBar;
