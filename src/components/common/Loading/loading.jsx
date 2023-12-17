import React from 'react';
import PropTypes from 'prop-types';
import './loading.css';

function Loading({ text = 'Загрузка...' }) {
  return (
    <div className="preloader" title={text} alt={text}>
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

Loading.propTypes = {
  text: PropTypes.string,
};

Loading.defaultProps = {
  text: 'Загрузка...',
};

export default Loading;
