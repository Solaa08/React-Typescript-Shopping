import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { useShoppingCart } from '../context/ShoppingCartContext';

const Navbar = () => {

    const { openCart, cartQuantity } = useShoppingCart()

    let activeStyle = {
        fontWeight: "bold",
      };

  return (
    <div className='navbar__container'>
        <div className='navbar-link__container'>
        <NavLink 
            onClick={openCart}
            className='navbar-link'
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined}>
            Home
        </NavLink>
        <NavLink 
            className='navbar-link'
            to="/Store"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined}>
            Store
        </NavLink>
        <NavLink 
            className='navbar-link'
            to="/About"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined}>
            About
        </NavLink>
        <NavLink 
            className='navbar-link'
            to="/">
            {cartQuantity}
        </NavLink>
        </div>
    </div>
  )
}

export default Navbar