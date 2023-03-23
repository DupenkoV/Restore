import React from 'react';
import { BookListItem } from '../book-list-item/Book-list-item';
import { useSelector } from 'react-redux';
import './book-list.css';


export const BookList = () => {

  const books = useSelector(state => state.books)
  
  return (
    <ul className='book-list'>
        {books.map(item => {
            return (
                <li key={item.id}><BookListItem book={item}/></li>
            )
        })}
    </ul>
  )
}
