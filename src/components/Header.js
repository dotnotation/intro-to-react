import React from 'react'

class Header extends React.Component{
    // this.props.parentClick

    state = {
        title: "CLICK ME!"
    }

    handleClick = (event) => {
        // event.persist()
        // setState
        this.setState({
            title: this.state.title === "CLICK ME!" ? "OH NO!!" : "CLICK ME!",
        })
        this.props.parentClick()
        
    }

    render(){
        return(
            <h1 onClick={this.handleClick} style={{color: this.props.color}}>
                {this.state.title}
            </h1>
        )
    }    
}

export default Header;