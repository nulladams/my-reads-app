import React, { Component } from 'react'

/**
* @description View that have the search input and search results components
* @constructor
*/
class SearchBooks extends Component {
    render() {
        const { books, onChangeBookShelf } = this.props
        return(
            <div>
                Search
            </div>
        )
    }
}

export default SearchBooks