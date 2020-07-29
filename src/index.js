// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi, badges';

// const container = document.getElementById('app');

// container.appendChild(element);


import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge'


//const jsx = <h1>Hello, Platzi, badges!</h1>
// const element = React.createElement('a', {href: 'https://platzi.com'},'Ir a platzi' );

const name = 'Mavro';

//const element = React.createElement('h1', {}, `Hola soy ${name}`)
// const jsx = <h1>Hola, soy {undefined}</h1>

const element = (
    <div>
        <h1>Hola, soy Mauro</h1>
        <p>Soy ingeniero frontend</p>
    </div>
);

// const element= React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hola, soy Mauro'),
//     React.createElement('p', {}, 'soy ingeniero frontend'),
//     );


const container = document.getElementById('app');

//ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);