import React, { Component } from 'react'
import Book from './Book'

/**
* @description Books results from the search
* @constructor
*/
class SearchBooksResults extends Component {
    render() {
        const { results, onChangeBookShelf } = this.props
    
        return(
            <div className="search-books-results">
                <ol className="books-grid">
                {results.map(book => (
                    <Book 
                        key={book.id}
                        book={book}
                        onChangeBookShelf={onChangeBookShelf}
                    /> 
                ))}
                </ol>
            </div>
        )
    }
}

export default SearchBooksResults