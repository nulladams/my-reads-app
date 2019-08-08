import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBooksBar extends Component {
    render() {
        return(
            <div className="search-books-bar">
                <Link
                    to='/'
                    className="close-search"
                >Close</Link>
            </div>
        )
    }
}

export default SearchBooksBar
