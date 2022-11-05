import React from 'react';
import {mainMENUType} from "../../types";
import './Menu.css';

interface Props {
  MENU: mainMENUType[],
  onAdd: (index: number) => void;
}

const Menu: React.FC<Props> = ({MENU, onAdd}) => {
  return (
    <div className="Menu">
      <h3 className="ItemTitle">Add Items</h3>
      <div className="MenuInner">
        {MENU.map((item, index) => {
          return (
            <div
              key={index}
              className="Item"
              onClick={() => onAdd(index)}
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