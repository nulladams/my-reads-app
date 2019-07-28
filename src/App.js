import React, { Component } from 'react'
import BooksListView from './BooksListView'
import './App.css'
import * as BooksAPI from './utils/BooksAPI'

/**
* @description Main class that start the app and has the books state
* @constructor
*/
class App extends Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState({
          books
        })
      })
  }
  changeBookShelf = () => {

  }
  render() {
    const { books, changeBookShelf } = this.state
    return (
      <div className="App">
        <BooksListView
          books={books}
          onChangeBookShelf={changeBookShelf}
        />
      </div>
    )
  }
}

export default App;
