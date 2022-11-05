import React from 'react';
import {mainMENUType} from "../../types";
import './Menu.css';

interface Props {
  MENU: mainMENUType[],
}

const Menu: React.FC<Props> = ({MENU}) => {
  return (
    <div className="Menu">
      <h3 className="ItemTitle">Add Items</h3>
      <div className="MenuInner">
        {MENU.map((item, id) => {
          return (
            <div
              key={id}
              className="Item"
            >
              <img
                src={item.image}
                alt={item.name}
                className="Image"
              />
              <div>
                <h4>{item.name}</h4>
                <p>Price: {item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;