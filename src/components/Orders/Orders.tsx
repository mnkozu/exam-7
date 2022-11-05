import React from 'react';
import {mainMENUType, MenuType} from "../../types";
import Order from "../Order/Order";
import './Orders.css';

interface Props {
  menu: MenuType[],
  MENU: mainMENUType[];
}

const Orders: React.FC<Props> = ({menu, MENU}) => {
  return (
    <div className="Orders">
      <h3 className="ItemTitle">Order Details</h3>
      {menu.map((item, index) => {
        if(item.count > 0) {
          return (
            <Order
              key={index}
              name={item.name}
              count={item.count}
              price={MENU[index].price}
            />
          )
        }
        return null;
      })}
    </div>
  );
};

export default Orders;