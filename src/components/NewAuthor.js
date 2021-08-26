import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const NewAuthor = () => {
  const [ name, setName ] = useState("");
  const history = useHistory();

  const handleChange = e => {
    setName(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    const body = { name: name }
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }
    await fetch('http://localhost:9393/authors', options)
    
    history.push("/authors");
    
    // redirect
  }

  return (
    <div>
      <h1>New Author</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={ name } onChange={ handleChange } autoFocus={ true } />
        </div>
        <br />
        <input type="submit" value="Create Author" />
      </form>
    </div>
  )
}

export default NewAuthor
