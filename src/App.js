import React from "react";
import Header from "./components/Header"


function App() {
  const colors = ['blue','pink','yellow']
  const mappedHeaders = colors.map((color) => {return <Header color={color} title="Goodbye World!" />} )


  return (
      <div className="App">
        {/* MAPPED */}
        {/* [Header COMPonent, Header , Header, Header] */}
        {mappedHeaders}
        
        
        
        {/* <Header color="red" title="Goodbye World!" />
        <Header color="blue" title="Goodmorning" />
        <Header color="yellow" title="eri" />
        <Header color="pink" title="pinkish" /> */}
        
        {/* Abstracted away the some magic from react */}
        {/* { new Header({color: "blue", title: "Weird way of doing it"}).render()} */}
        {/* {Header({color: "blue", title: "Weird way of doing it"})} */}
      </div>
  );
}

export default App;
