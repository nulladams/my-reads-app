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
                <div>
                    <div>
                        <div 
                            style={{ width: 128, 
                                     height: 193, 
                                     backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}
                        ></div>
                    </div>
                </div>
            </li>
        )
    }
}

export default Book