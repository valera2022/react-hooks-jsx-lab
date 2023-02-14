import React from "react";
import { name as Name, city as City} from "../data/data.js";

const divStyle = {
  color: 'firebrick'}

function Home() {
  // update the JSX being returned!
  
  return (<div id="home">Home
   <h1 style={divStyle}> {Name} is a Web Developer from {City}</h1>
  
  </div>)
  
}

export default Home;
