import PropTypes from 'prop-types';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listActions } from '../../../reducers';
import { statusTypes } from '../../../store/storeTypes';
import ErrorBubble from '../../common/Error/error';

function CatalogCategories({ name }) {
  const { items, selectedItem, status } = useSelector((state) => state[name]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listActions[name].requestItems());
  }, [dispatch, name]);

  const handleChangeCatalog = (e, item) => {
    e.preventDefault();
    dispatch(listActions[name].selectItem(item));
  };

  const handleError = () => {
    dispatch(listActions[name].requestItems());
  }

  if (status === statusTypes.ERROR) return <ErrorBubble retry={handleError}/>;

  return (
    <ul className="catalog-categories nav justify-content-center">
      {items?.length > 0 && (
        <li className="nav-item" key="ch-0">
          <Link
            className={`nav-link ${selectedItem.id ? '' : 'active'}`}
            to=""
            onClick={(e) => handleChangeCatalog(e, {})}
          >
            Все
          </Link>
        </li>
      )}
      {items?.map((v) => (
        <li className="nav-item" key={`ch-${v.id}`}>
          <Link
            className={`nav-link ${v.id === selectedItem.id ? 'active' : ''}`}
            to=""
            onClick={(e) => handleChangeCatalog(e, v)}
          >
            {v.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

CatalogCategories.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.object,
};

CatalogCategories.defaultProps = {
  name: 'categories',
};

export default CatalogCategories;
