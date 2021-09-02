import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { baseUrl } from '../globals';

const EditAuthor = () => {
  const [ name, setName ] = useState("");
  const [ author, setAuthor ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const loadAuthor = async () => {
      const resp = await fetch(`${baseUrl}/authors/${id}`)
      const data = await resp.json();
      setAuthor(data);
      setName(data.name);
      setLoading(false);
    }
    loadAuthor();
  }, [id])

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
      method: "PATCH",
      headers,
      body: JSON.stringify(body)
    }
    await fetch(`${baseUrl}/authors/${ id }`, options)
    
    history.push(`/authors/${ id }`);
    
    // redirect
  }

  if(loading){ return <h1>Loading...</h1>};

  return (
    <div>
      <h1>Edit { author.name }</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={ name } onChange={ handleChange } autoFocus={ true } />
        </div>
        <br />
        <input type="submit" value="Update Author" />
      </form>
    </div>
  )
}

export default EditAuthor
