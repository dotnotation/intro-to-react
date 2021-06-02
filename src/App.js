import React from "react";
import Header from "./components/Header"


function App() {
  const colors = ['blue','pink','yellow']
  const mappedHeaders = colors.map((color) => {return <Header color={color} title="Hi World!" />} )


  return (
      <div className="App">
        {mappedHeaders}
      </div>
  );
}

export default App;
