import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';

const NewBook = () => {
  const [author, setAuthor] = useState(null);
  const [state, setState] = useState({
    title: "",
    genre: ""
  })
  const [loading, setLoading] = useState(true);
  const { authorId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const loadAuthor = async () => {
      const resp = await fetch(`http://localhost:9393/authors/${authorId}`)
      const data = await resp.json();
      setAuthor(data);
      setLoading(false);
    }
    loadAuthor();
  }, [authorId])

  if(loading){ return <h1>Loading...</h1>};

  const handleChange = e => {
    // change state dynamically for both title and genre
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(state)
    }    
    await fetch(`http://localhost:9393/authors/${ authorId }/books`, options)

    history.push(`/authors/${ authorId }`);
  }

  return (
    <div>
      <h3>Create Book For { author.name }</h3>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title" value={ state.title } onChange={ handleChange } />
        </div>
        <br />
        <div>
          <label htmlFor="genre">Genre: </label>
          <input type="text" name="genre" value={ state.genre } onChange={ handleChange } />
        </div>
        <br />
        <input type="submit" value="Create Book" />
      </form>
    </div>
  )
}

export default NewBook
