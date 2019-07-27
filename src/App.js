import React, { Component } from 'react'
import BooksListView from './BooksListView'

/**
* @description Main class that start the app and has the books state
* @constructor
*/
class App extends Component {
  state = {
    books: []
  }
  changeBookShelf = () => {

  }
  render() {
    const { books, changeBooksShelf } = this.state
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
