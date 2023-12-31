import React from 'react';
import PropTypes from 'prop-types';
import './banner.css';

function Banner({ data }) {
  return (
    <div className="banner">
      <img src="/img/banner.jpg" className="img-fluid" alt="К весне готовы!" />
      <h2 className="banner-header">К весне готовы!</h2>
    </div>
  );
}

Banner.propTypes = {
  data: PropTypes.object,
};

export default Banner;
