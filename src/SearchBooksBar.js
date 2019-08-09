import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/**
* @description Search input
* @constructor
*/
class SearchBooksBar extends Component {
    state = {
        query: ""
    }
    handleChange = (value) => {
        this.updateQuery(value)
    }
    updateQuery = (query) => {
        this.setState((currState) => ({
            query: query    
        }))
    }
    render() {
        const { query } = this.state
        return(
            <div className="search-books-bar">
                <Link
                    to='/'
                    className="close-search"
                >Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={query}
                        onChange={(event) => this.handleChange(event.target.value)}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBooksBar
