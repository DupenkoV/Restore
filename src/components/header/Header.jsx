import React from 'react';
import './header.css';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const Header = ({numItems, total}) => {
  return (
    <header className='shop-header'>
        <Link to="/" className='logo text-dark'>ReStore</Link>
        <Link to="/cart">
            <FiShoppingCart className='shopping-cart'/>
            {numItems} items (${total})
        </Link>
    </header>
  )
}
