import React from 'react'
import './book-list-item.css'

export const BookListItem = ({book}) => {
  const {title, author, price, coverImage} = book
  return (
    <div className='book-list-item'>
        <div className='book-cover'>
          <img src={coverImage} alt='cover'/>
        </div>
        <div className='books-details'>
          <span href='#' className='book-title'>{title}</span>
          <div className='book-author'>{author}</div>
          <div className='book-price'>${price}</div>
          <button className='btn btn-info add-to-cart'>Add to cart</button>
        </div>
    </div>
  )
}
