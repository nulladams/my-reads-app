import React, { Component } from 'react'
import SearchBooksBar from './SearchBooksBar'

/**
* @description View that have the search input and search results components
* @constructor
*/
class SearchBooks extends Component {
    render() {
        const { books, onChangeBookShelf } = this.props
        return(
            <div>
                <SearchBooksBar />
            </div>
        )
    }
}

export default SearchBooks