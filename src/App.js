import {Component} from "react";
import Header from "./components/Header"

class App extends Component{
  
  
  render(){
    return (
        <div className="App">
          <Header color="blue" title="CLICK ME!"/>
        </div>
    )
  };
}

export default App;
