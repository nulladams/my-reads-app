import React, { Component } from 'react'
import BooksSession from './BooksSession'


/**
* @description Representes the books categories (Currently Reading, Want to Read and Read) to organize the reads
* @constructor
*/
class BooksShelf extends Component {
    render() {
        const { shelfTitle, shelfSession, books, onChangeBookShelf } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <BooksSession 
                    shelfSession={shelfSession}
                    books={books}
                    onChangeBookShelf={onChangeBookShelf}
                />
            </div>
        )
    }
}

export default BooksShelf