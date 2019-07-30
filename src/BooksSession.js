import React, { Component } from 'react'
import Book from './Book'

class BooksSession extends Component {
    render() {
        const { shelfSession, books, onChangeBookShelf } = this.props
        return(
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.filter(book => book.shelf === shelfSession)
                        .map(book => (
                            <Book key={book.id} book={book} onChangeBookShelf={onChangeBookShelf} />
                        ))
                    }
                </ol>
            </div>
        )
    }
}

export default BooksSession

