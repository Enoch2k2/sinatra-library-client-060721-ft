import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import AuthorList from './components/AuthorList';
import NewAuthor from './components/NewAuthor';
import EditAuthor from './components/EditAuthor';
import AuthorDetails from './components/AuthorDetails';
import BookList from './components/BookList';
import NewBook from './components/NewBook';
import BookDetails from './components/BookDetails';
import Home from './components/Home';

import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/authors" component={ AuthorList } />
          <Route exact path="/authors/new" component={ NewAuthor } />
          <Route exact path="/authors/:id/edit" component={ EditAuthor } />
          <Route exact path="/authors/:id" component={ AuthorDetails } />
          <Route exact path="/books" component={ BookList } />
          <Route exact path="/authors/:authorId/books/new" component={ NewBook } />
          <Route exact path="/books/:id" component={ BookDetails } />
          <Route component={ PageNotFound } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
