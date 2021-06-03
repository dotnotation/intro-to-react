import {Component} from "react";
import Header from "./components/Header"
import List from "./containers/List"
import Form from "./components/Form"

class App extends Component{
  state = {
    blogs: []
  }

  addBlog = (blog) => {
    this.state.blog = ['badstate']
    this.setState((prevState, prevProps) => {
      //blogs: this.state.blogs.push(blog) <= Bad 
      return { 
        blogs: [...prevState.blogs, blog]
      }
    })
  }

  render(){
    return (
        <div className="App">
          <Form addBlog={this.addBlog}/>
          <List blogs={this.state.blogs} />
        </div>
    )
  };
}

export default App;
