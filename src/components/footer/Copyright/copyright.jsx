import React from 'react';
import PropTypes from 'prop-types';

function Copyright({ link }) {
  return (
    <section>
      <div className="footer-copyright">
        2009-2022 ©
        {' '}
        <a href={link || '/'}>BosaNoga.ru</a>
        {' '}
        — модный интернет-магазин обуви и аксессуаров.
        Все права защищены.
        <br />
        Доставка по всей России!
      </div>
    </section>
  );
}

Copyright.propTypes = {
  link: PropTypes.string,
};

export default Copyright;
