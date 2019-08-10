import React, { Component } from 'react'
import SearchBooksBar from './SearchBooksBar'
import * as BooksAPI from './utils/BooksAPI'

/**
* @description View that have the search input and search results components
* @constructor
*/
class SearchBooks extends Component {
    state = {
        results: []
    }
    updateResults = (query) => {
        if (query === '') {
            this.setState((currState) => ({
                results: []    
            }))
        } else {
            BooksAPI.search(query, 20)
                .then((results) => {
                    console.log(results)
                    return results
                })
                .then((results) => {
                    if (results.hasOwnProperty('error')) {
                        this.setState((currState) => ({
                            results: []
                        }))
                    } else {
                        this.setState((currState) => ({
                            results
                        }))
                    }
                    return
                })
                .then(() => {
                    if (typeof this.state.results === 'undefined') {
                        this.setState((currState) => ({
                            results: []
                        }))
                    }
                    return
                })
                .catch((error) => {
                    if (query === "") {
                        this.setState((currState) => ({
                            results: []
                        }))
                    }
                })
        }
    }
    render() {
        const { results } = this.state
        const { books, onChangeBookShelf } = this.props
        return(
            <div>
                <SearchBooksBar 
                    results={results}
                    onUpdateResults={this.updateResults}
                />
            </div>
        )
    }
}

export default SearchBooks