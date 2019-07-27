import React, { Component } from 'react'


/**
* @description List the books shelf (Currently Reading, Want to Read and Read)
* @constructor
*/
class BooksListView extends Component {
    render() {
        const { books, onChangeBookShelf } = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-Content">
                    <div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default BooksListView