// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi, badges';

// const container = document.getElementById('app');

// container.appendChild(element);


import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';
import "bootstrap/dist/css/bootstrap.css";
import "./global.css"

//const jsx = <h1>Hello, Platzi, badges!</h1>
// const element = React.createElement('a', {href: 'https://platzi.com'},'Ir a platzi' );


const container = document.getElementById('app');

//ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge 
    firstName="Mauro" 
    lastName="Rivero" 
    jobTitle="Frontend Engineer" 
    twitter="risky_mav"/>, 
    container);