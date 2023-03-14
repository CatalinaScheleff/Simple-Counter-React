import React from "react";
import ReactDOM from "react-dom";

function SecondsCounter (props) {
   
    return <div className ="bigDiv" >
        <div className = "clock"><i className="far fa-clock"></i></div>
        <div className = "smallDiv">0</div>
        <div className = "smallDiv">0</div>
        <div className = "smallDiv">0</div>
        <div className = "smallDiv">0</div>
        <div className = "smallDiv">{props.segundos}</div>

    </div>
}

 let counter=0;  
 setInterval( function() {
    ReactDOM.render(
        <SecondsCounter segundos={counter}/>,
        document.querySelector('#app')
    ); 
        counter++;
    }, 1000);
    

    export default SecondsCounter;

   