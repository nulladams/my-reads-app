import React, { Component } from 'react'

class BooksSession extends Component {
    render() {
        const { shelfSession, books, onChangeBookShelf } = this.props
        return(
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.filter(book => book.shelf === shelfSession)
                        .map(book => (
                            <li>{book.title}</li>
                        ))
                    }
                </ol>
            </div>
        )
    }
}

export default BooksSession

