import PropTypes from 'prop-types';
import React from 'react';

function CatalogSearchForm({ handleChange, value = '' }) {
  return (
    <form className="catalog-search-form form-inline">
      <input
        className="form-control"
        placeholder="Поиск"
        onChange={(e) => handleChange(e.target.value)}
        value={value === null ? '' : value}
        name="q"
      />
    </form>
  );
}

CatalogSearchForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

CatalogSearchForm.defaultProps = {
  value: '',
};

export default CatalogSearchForm;
