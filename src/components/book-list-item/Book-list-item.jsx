import React from 'react'
import './book-list-item.css'

export const BookListItem = ({book}) => {
  const {title, author, price} = book
  return (
    <div className='book-list-item'>
        <div className='books-cove'>

        </div>
        <div className='books-details'>
          <a href='#' className='book-title'>{title}</a>
          <div className='book-author'>{author}</div>
          <div className='book-price'>{price}</div>
        </div>
    </div>
  )
}
