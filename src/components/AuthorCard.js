import React from 'react'
import { NavLink } from 'react-router-dom';

const AuthorCard = ({ author, deleteAuthor }) => {
  return (
    <li>
      <NavLink to={`/authors/${author.id}`}>{ author.name }</NavLink> - <button onClick={ () => deleteAuthor(author.id) }>Delete</button>
    </li>
  )
}

export default AuthorCard
