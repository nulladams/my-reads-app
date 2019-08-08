import React, { Component } from 'react'
import BooksShelf from './BooksShelf'
import OpenSearch from './OpenSearch'


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
                        <BooksShelf 
                            shelfTitle="Currently Reading"
                            shelfSession="currentlyReading"
                            books={books}
                            onChangeBookShelf={onChangeBookShelf}
                        />
                        <BooksShelf 
                            shelfTitle="Want to Read"
                            shelfSession="wantToRead"
                            books={books}
                            onChangeBookShelf={onChangeBookShelf}
                        />
                        <BooksShelf 
                            shelfTitle="Read"
                            shelfSession="read"
                            books={books}
                            onChangeBookShelf={onChangeBookShelf}
                        />
                    </div>
                </div>
                <OpenSearch />
            </div>
        )
    }
}

export default BooksListView