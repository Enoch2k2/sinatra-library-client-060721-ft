import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/books">Books</NavLink></li>
        <li><NavLink to="/authors">Authors</NavLink></li>
        <li><NavLink to="/authors/new">Create Author</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
