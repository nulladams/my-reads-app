import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class OpenSearch extends Component {
    render() {
        return(
            <div className="open-search">
                <Link
                    to='/search'
                >Add Book</Link>
            </div>
        )
    }
}

export default OpenSearch