import React from "react";

function SecondsCounter (props) {
   
    return <div className ="bigDiv" >
        <div className = "clock"><i className="fa-regular fa-clock"></i></div>
        <div className = "smallDiv">0</div>
        <div className = "smallDiv">0</div>
        <div className = "smallDiv">0</div>
        <div className = "smallDiv">0</div>
        <div className = "smallDiv">{props.count}</div>

    </div>
}

 let segundos=0;
    setInterval( function() {
        console.log (segundos);
        segundos++;
    }, 1000)

export default SecondsCounter;

