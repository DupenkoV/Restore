import React from 'react'
import './app.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

const App = () => {
  return (
    <main role='main' className='container'>
      <Routes>
        <Route path='/'
                element={<HomePage />} />
        <Route path='/cart'
                element={<CartPage />}/>
      </Routes>
    </main>
  )
}

export default App;