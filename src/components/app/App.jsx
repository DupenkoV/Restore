import React from 'react'
import './app.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';
import { Header } from '../header/Header';

const App = () => {
  return (
    <main role='main' className='container'>
      <Header numItems={5} total={210} />
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