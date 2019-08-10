import React, { Component } from 'react'
import Book from './Book'

/**
* @description Books results from the search
* @constructor
*/
class SearchBooksResults extends Component {
    render() {
        const { results, onChangeBookShelf, books } = this.props
        const checkBookInMyReads = (book) => {
            return books.filter((b) => b.id === book.id)
        }
        const bookHasCover = (book) => {
            return book.hasOwnProperty('imageLinks')
        }
        return(
            <div className="search-books-results">
                <ol className="books-grid">
                {results.map(book => {
                    const checkedBook = checkBookInMyReads(book)
                    return (bookHasCover(book) && (
                        <Book 
                            key={book.id}
                            book={(checkedBook.length > 0)
                                    ? checkedBook[0]
                                    : book
                                 }
                            onChangeBookShelf={onChangeBookShelf}
                        />
                    ))
                })}
                </ol>
            </div>
        )
    }
}

export default SearchBooksResults