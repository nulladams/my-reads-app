import React, { Component } from 'react'

/**
* @description Represents a Book
* @constructor
*/
class Book extends Component {
    render() {
        const { book, onChangeBookShelf } = this.props
        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover"
                              style={{ width: 128, 
                                     height: 193, 
                                     backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}
                        ></div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}

export default Book