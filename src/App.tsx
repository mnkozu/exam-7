import React, {useState} from 'react';
import Menu from "./components/Menu/Menu";
import './App.css';

import CheeseBurgerIMG from './assets/cheeseBurger.png';
import HamburgerIMG from './assets/hamburger.png';
import FriesIMG from './assets/fries.png';
import CoffeeIMG from './assets/coffee.png';
import ColaIMG from './assets/cola.png';
import TeaIMG from './assets/tea.png';
import Orders from "./components/Orders/Orders";

const MENU = [
  {name: 'Cheese Burger', price: 90, image: CheeseBurgerIMG, id: 1},
  {name: 'Hamburger', price: 80, image: HamburgerIMG, id: 2},
  {name: 'Fries', price: 45, image: FriesIMG, id: 3},
  {name: 'Coffee', price: 70, image: CoffeeIMG, id: 4},
  {name: 'Cola', price: 40, image: ColaIMG, id: 5},
  {name: 'Tea', price: 50, image: TeaIMG, id: 6}
];

const App = () => {
  const[menu, setMenu] = useState([
    {name: 'Cheese Burger', count: 0},
    {name: 'Hamburger', count: 2},
    {name: 'Fries', count: 4},
    {name: 'Coffee', count: 1},
    {name: 'Cola', count: 0},
    {name: 'Tea', count: 0}
  ]);

  return (
    <div className="App">
      <h1 className="FastFoodHeaderTitle">Fast Food</h1>
      <div className="Container">
        <div className="FastFood">
          <Orders menu={menu} MENU={MENU}/>
          <Menu MENU={MENU}/>
        </div>
      </div>
    </div>
  );
}

export default App;
