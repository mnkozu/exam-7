import React, {PropsWithChildren, ReactElement} from 'react';
import {mainMENUType, MenuType} from "../../types";
import Order from "../Order/Order";
import './Orders.css';

interface Props extends PropsWithChildren{
  menu: MenuType[],
  MENU: mainMENUType[];
  onDel: (index: number) => void;
  totalPrice: ReactElement;
}

const Orders: React.FC<Props> = ({menu, MENU, onDel, totalPrice}) => {
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
              onDel={() => onDel(index)}
            />
          )
        }
        return null;
      })}
      <div>{totalPrice}</div>
    </div>
  );
};

export default Orders;