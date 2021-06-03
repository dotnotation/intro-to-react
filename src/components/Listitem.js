import React, { Component } from 'react'

class Listitem extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.title}</h4> 
                <hr></hr>
                <img src={this.props.content} width="100px" />
            </div>
        )
    }
}

export default Listitem
