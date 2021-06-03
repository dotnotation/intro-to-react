import React, {Component} from 'react'


class Form extends Component{

    state = {
        title: "",
        content: ""
    }

    handleChange = (e) => {
        this.setState({
            // title: e.target.value
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // have information 
        // DO SOMETHING WITH IT
        // ---
        this.props.addBlog(this.state)
        this.setState({
            title: "",
            content: ""
        })



    }



    render(){
        return(
           <form onSubmit={this.handleSubmit}>
               <h1>CREATE A BLOG POST</h1>
               <label>Title:</label>
               <input onChange={this.handleChange} name="title" type="text" value={this.state.title}/> <br /><br />

               <label>Content:</label>
               <input  type="text" name="content" onChange={this.handleChange} value={this.state.content} /> <br /><br />

               <button> Submit Blog </button>
               
           </form> 
        )
    }

}

export default Form