import React, { Component } from 'react'


/**
* @description Representes the books categories (Currently Reading, Want to Read and Read) to organize the reads
* @constructor
*/
class BooksShelf extends Component {
    render() {
        const { shelfTitle } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>

            </div>
        )
    }
}

export default BooksShelf