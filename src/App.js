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
  changeBooksShelf = () => {

  }
  render() {
    const { books, changeBooksShelf } = this.state
    return (
      <div className="App">
        <BooksListView
          books={books}
          onChangeBooksShelf={changeBooksShelf}
        />
      </div>
    )
  }
}

export default App;
