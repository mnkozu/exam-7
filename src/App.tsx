import React, {useState} from 'react';
import Menu from "./components/Menu/Menu";
import Orders from "./components/Orders/Orders";
import './App.css';

import CheeseBurgerIMG from './assets/cheeseBurger.png';
import HamburgerIMG from './assets/hamburger.png';
import FriesIMG from './assets/fries.png';
import CoffeeIMG from './assets/coffee.png';
import ColaIMG from './assets/cola.png';
import TeaIMG from './assets/tea.png';

const MENU = [
  {name: 'Cheese Burger', price: 90, image: CheeseBurgerIMG},
  {name: 'Hamburger', price: 80, image: HamburgerIMG},
  {name: 'Fries', price: 45, image: FriesIMG},
  {name: 'Coffee', price: 70, image: CoffeeIMG},
  {name: 'Cola', price: 40, image: ColaIMG},
  {name: 'Tea', price: 50, image: TeaIMG}
];

const App = () => {
  const[menu, setMenu] = useState([
    {name: 'Cheese Burger', count: 0},
    {name: 'Hamburger', count: 0},
    {name: 'Fries', count: 0},
    {name: 'Coffee', count: 0},
    {name: 'Cola', count: 0},
    {name: 'Tea', count: 0}
  ]);

  const addItem = (index: number)=> {
    setMenu(prevState => prevState.map((item, i) => {
      if (index === i) {
        return {
          ...item,
          count: item.count + 1
        };
      }
      return item;
    }));
  };

  const delItem = (index: number) => {
    setMenu(prevState => prevState.map((item, i) => {
      if (index === i) {
        return {
          ...item,
          count: 0
        };
      }
      return item;
    }));
  };

  const totalPrice = () => {
    let sum: number = 0;
    for (let i = 0; i < menu.length; i++) {
      const sumOfOne = MENU[i].price * menu[i].count;
      sum += sumOfOne;
    }

    if (sum > 0) {
      return <div>Total price: {sum}</div>;
    } else {
      return (
        <div>
          <div>Order is empty!</div>
          <div>Please add some items!</div>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <h1 className="FastFoodHeaderTitle">Fast Food</h1>
      <div className="Container">
        <div className="FastFood">
          <Orders
            menu={menu}
            MENU={MENU}
            onDel={(index) => delItem(index)}
            totalPrice={totalPrice()}
          />
          <Menu MENU={MENU} onAdd={(index) => addItem(index)}/>
        </div>
      </div>
    </div>
  );
}

export default App;
