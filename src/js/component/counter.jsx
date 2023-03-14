import React from "react";
// import ReactDOM from "react-dom";

function SecondsCounter (props) {
   
    let texto = props.segundos.toString()
    let unidades = texto [texto.length-1];
    let decenas = texto [texto.length-2];
    let centenas = texto [texto.length-3]
    let mil = texto [texto.length-4]
    let decmil = texto [texto.length-5]

    return <div className ="bigDiv" >
        <div className = "clock"><i className="far fa-clock"></i></div>
        <div className = "smallDiv">{decmil==undefined? 0:decmil}</div>
        <div className = "smallDiv">{mil==undefined? 0:mil}</div>
        <div className = "smallDiv">{centenas==undefined? 0:centenas}</div>
        <div className = "smallDiv">{decenas==undefined? 0:decenas}</div>
        <div className = "smallDiv">{unidades}</div>

    </div>
}

//  let counter=0;  
//  setInterval( function() {
//     ReactDOM.render(
//         <SecondsCounter segundos={counter}/>,
//         document.querySelector('#app')
//     ); 
//         counter++;
//     }, 1000);
    

    export default SecondsCounter;

   