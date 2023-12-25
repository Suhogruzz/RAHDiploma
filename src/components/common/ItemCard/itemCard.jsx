import React from 'react';
import { NavLink } from 'react-router-dom';
import ItemImages from '../ItemImages/itemImages';

function ItemCard({ item }) {
  return (
    <div className="card" style={{ height:'100%' }}>
      <ItemImages
        images={item.images}
        title={item.title}
      />
      <div className="card-body" style={{ display: 'flex', flexDirection: 'column' }}>
        <p className="card-text">{item.title}</p>
        <p className="card-text">
          {item.price.toLocaleString()}
          {' '}
          руб.
        </p>
        <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary" style={{  marginTop: 'auto' }}>Заказать</NavLink>
      </div>
    </div>
  );
}

export default ItemCard;
