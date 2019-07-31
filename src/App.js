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
  changeBookShelf = (book, newShelfSession) => {
    console.log('change')
    BooksAPI.update(book, newShelfSession)
      .then(() => {
        book.shelf = newShelfSession
        this.setState((currState) => ({
          books: currState.books.filter((b) => {
            return book.id !== b.id
          }).concat([book])
        }))
      })
  }
  render() {
    const { books, changeBookShelf } = this.state
    return (
      <div className="App">
        <BooksListView
          books={books}
          onChangeBookShelf={this.changeBookShelf}
        />
      </div>
    )
  }
}

export default App;
