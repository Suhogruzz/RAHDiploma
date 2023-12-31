import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { statusTypes } from '../../../store/storeTypes';
import { listActions } from '../../../reducers';
import Loading from '../../common/Loading/loading';
import ItemCard from '../../common/ItemCard/itemCard';
import ErrorBubble from '../../common/Error/error';

function TopSales({ name }) {
  const { items, status } = useSelector((state) => state[name]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listActions[name].requestItems(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleError = () => {
    dispatch(listActions[name].requestItems(name));
  }

  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {status === statusTypes.LOADING ? (
        <Loading />
      )
        : status === statusTypes.ERROR ? (
          <ErrorBubble retry={handleError}/>
			  ) : (
  <div className="row">
    {items.map((v) => (
      <div className="col-4" key={`ts_col_${v.id}`}>
        <ItemCard item={v} key={`ts_item_${v.id}`} />
      </div>
    ))}
  </div>
			  )}
    </section>
  );
}

TopSales.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.object,
};

TopSales.defaultProps = {
  name: 'topSales',
};

export default TopSales;
