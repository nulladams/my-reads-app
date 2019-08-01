import React, { Component } from 'react'

/**
* @description Change the shelf where the book is located or remove it from the reads 
* @constructor
*/
class BookShelfChanger extends Component {
    handleChange = (e) => {
        e.preventDefault()
        if (this.props.onChangeBookShelf) {
            this.props.onChangeBookShelf(this.props.book, e.target.value)
        }
    }
    render() {
        const { book } = this.props
        return(
            <div className="book-shelf-changer">
                <select value={book.hasOwnProperty('shelf') ? book.shelf : "none"} onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger