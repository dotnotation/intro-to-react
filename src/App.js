import {Component} from "react";
import Header from "./components/Header"
import List from "./containers/List"

class App extends Component{
  state = {
    color: "blue",
  }

  parentClick = () => {
    this.setState({
      color: this.state.color === "blue" ? "red" : "blue"
    }, () => console.log(this.state))
  }
  
  render(){
    return (
        <div className="App">
          <Header parentClick={this.parentClick} color={this.state.color}/>
          <List color={this.state.color}/>
        </div>
    )
  };
}

export default App;
