import React from 'react';
import './header.css';
import { FiShoppingCart } from 'react-icons/fi'

export const Header = ({numItems, total}) => {
  return (
    <header className='shop-header'>
        <a href="#" className='logo text-dark'>ReStore</a>
        <a>
            <FiShoppingCart className='shopping-cart'/>
            {numItems} items (${total})
        </a>
    </header>
  )
}
