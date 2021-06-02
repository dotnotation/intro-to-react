import React, { Component } from 'react'

class List extends Component {

    render() {
        return (
            <div>
                <p> THE COLOR OF THE HEADER IS {this.props.color.toUpperCase()}</p>
            </div>
        )
    }
}

export default List
