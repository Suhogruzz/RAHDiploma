import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { listActions } from '../../../reducers';
import { statusTypes } from '../../../store/storeTypes';
import CatalogCategories from './CatalogueCategories';
import Loading from '../../common/Loading/loading';
import ItemCard from '../../common/ItemCard/itemCard';
import CatalogSearchForm from './CatalogueSearchForm';
import './catalogue.css';
import ErrorBubble from '../../common/Error/error';

function Catalog({ name, withSearch = false }) {
  const categoryReducerName = 'categories';
  const [searchParams] = useSearchParams();
  const queryString = searchParams.get('q');
  const { items, status } = useSelector((state) => state[name]);
  const { selectedItem } = useSelector((state) => state[categoryReducerName]);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(queryString);
  const prepareRequestParams = (offset = 0) => {
    let result = { offset };
    if (selectedItem.id !== undefined) {
      result = {
        ...result,
        categoryId: selectedItem.id,
      };
    }
    if (searchQuery && searchQuery.length > 0) {
      result = {
        ...result,
        q: searchQuery,
      };
    }

    return result;
  };



  const handleGetMoreItems = (params, update = false) => {
    dispatch(listActions[name].requestItems(params, update));
  };

  const handleError = (params, update = true) => {
    dispatch(listActions[name].requestItems(params, update));
  };

  useEffect(() => {
    handleGetMoreItems(prepareRequestParams());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem, selectedItem.id, searchQuery]);

  const handleChangeSearchString = (query) => {
    const res = query.trim();
    setSearchQuery(res);
  };

  return (
    <section className="catalog">
      <h2 className="text-center">
        Каталог
      </h2>

      {withSearch
        && (
        <CatalogSearchForm
          handleChange={handleChangeSearchString}
          value={searchQuery}
        />
        )}
      <CatalogCategories name={categoryReducerName} />
      {status === statusTypes.LOADING && items?.length === 0 ? (
        <Loading />
      ) : status === statusTypes.ERROR && items?.length === 0  ?(
        <ErrorBubble handleError retry={handleError}/>)  : (
          <div>
            {items?.length > 0 ? (
              <div className="row">
                {items.map((v) => (

                  <div className="col-4" key={`ts_col_${v.id}`}>
                    <ItemCard item={v} key={`ts_item_${v.id}`} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center">
                <span>Товаров не найдено...</span>
              </div>
            )}
            <div className="text-center more-info">
              {status === statusTypes.LOADING ? (
                <Loading />
              ) : status === statusTypes.ERROR && items?.length > 0  ?(
                <ErrorBubble handleError retry={() => handleError(prepareRequestParams(items.length), true)}/>
              )
                : status !== statusTypes.IDLE && (
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => handleGetMoreItems(prepareRequestParams(items.length), true)}
                  >
                    Загрузить ещё
                  </button>
                )}
            </div>
          </div>
        )}
    </section>
  );
}

Catalog.propTypes = {
  name: PropTypes.string.isRequired,
  withSearch: PropTypes.bool,
};

Catalog.defaultProps = {
  name: 'items',
  withSearch: false,
};

export default Catalog;
