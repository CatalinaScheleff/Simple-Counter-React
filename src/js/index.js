//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

import SecondsCounter from "./component/counter.jsx";

let contador = 0
setInterval(function(){
    console.log(contador) 
    ReactDOM.render(<SecondsCounter segundos= {contador} />, document.querySelector("#app")); 
    contador++   
},1000);
//render your react application

