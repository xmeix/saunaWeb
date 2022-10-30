import "./Navbar.css";
import {useState} from "react";
import logo from "../../media/logo.png";

import close from "../../media/close.svg";
import menu from "../../media/menu.svg";
const Navbar = () => {

  const [menuOpen,setMenuOpen] =  useState(false);


  const myFunction = () => {
    if(menuOpen) setMenuOpen(false);
    else setMenuOpen(true); 
  };
  return (
    <div className="header">
      <h1 className="logo">
        {/*<img src={logo} alt="logo" className="logoImage" />*/}
        <p>Ammadyn</p>
      </h1>
      <button className="closeBtn" onClick={myFunction}>
        <img src={menuOpen ? close : menu} alt="close" className="close" />
      </button>

      <ul className={ menuOpen ? "navbar" : "navbar display"}>
        <a href="#home">
          <li>Home</li>
        </a>
        <a href="#quoi">
          <li>Amma Assis</li>
        </a>
        <a href="#comment">
          <li>Votre séance</li>
        </a>
        <a href="#pourquoi">
          <li>Le mal-être</li>
        </a>
        <a href="#bienfaits">
          <li>Les bienfaits</li>
        </a>
        <a href="#tarif">
          <li>Tarif</li>
        </a>
        <a href="#contact" className="special">
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
