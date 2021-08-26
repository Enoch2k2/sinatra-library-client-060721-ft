import React from 'react'
import { NavLink } from 'react-router-dom';

const BookCard = ({ book, author, deleteBook }) => {

  return (
    <li>
      <NavLink to={`/books/${book.id}`}>{ book.title }</NavLink> - { book.genre } - by: { author.name } - <button onClick={ () => deleteBook( book.id ) }>Delete</button>
    </li>
  )
}

export default BookCard