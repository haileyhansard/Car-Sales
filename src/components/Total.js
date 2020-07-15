import React from 'react';
import {useSelector, connect} from 'react-redux';

const selector = state => {
  return {
    price: state.car.price,
    additionalPrice: state.additionalPrice
  }
}

const Total = (props) => {
  // const {price, additionalPrice} = useSelector(selector);
  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};

export default connect(selector)(Total);
