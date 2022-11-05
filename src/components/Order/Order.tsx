import React, {PropsWithChildren} from 'react';
import './Order.css';

interface Props extends PropsWithChildren{
  name: string,
  count: number,
  price: number,
}

const Order: React.FC<Props> = props => {
  return (
    <div className="OrderBlock">
      <p className="ItemOrdersName">{props.name}</p>
      <p className="ItemOrders">{props.count}</p>
      <p className="ItemOrders">{props.price}</p>
      <button className="Btn ItemOrders">Delete</button>
    </div>
  );
};

export default Order;