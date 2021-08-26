import React from 'react'
import { NavLink } from 'react-router-dom';

const AuthorCard = ({ author }) => {
  return (
    <li>
      <NavLink to={`/authors/${author.id}`}>{ author.name }</NavLink>
    </li>
  )
}

export default AuthorCard
