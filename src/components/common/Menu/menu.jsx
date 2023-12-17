import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './menu.css';

function Menu({ menu, style }) {
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useState(window.location.href.split('/').pop());

  return (
    <ul className={style}>
      {menu.menuItems?.map((v) => (
        <li className="nav-item" key={v.id}>
          <NavLink
            className="nav-link"
            activeclassname="nav-link active"
            to={v.link}
          >
            {v.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

Menu.propTypes = {
  menu: PropTypes.shape({
    home: PropTypes.object,
    menuItems: PropTypes.array,
  }),
  style: PropTypes.string,
};

export const HeadMenu = ({ menu, style = 'navbar-nav mr-auto' }) => Menu({ menu, style });

export const FootMenu = ({ menu, style = 'nav flex-column' }) => Menu({ menu, style });
