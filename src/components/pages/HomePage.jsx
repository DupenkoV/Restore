import React from 'react';
import { BookList } from '../book-list/Book-list';
import { ShoppingCartTable } from '../shopping-cart-table/ShoppingCartTable';

export const HomePage = () => {
  return (
    <div>
        <BookList />
        <ShoppingCartTable />
    </div>
  )
}
