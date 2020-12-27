import React from 'react';
import logo from '../images/logo.svg';
import astro from '../images/astronaut.svg';
import Home from '../components/styles/Home.css';
import {Link} from 'react-router-dom';

class Start extends React.Component{
render(){
    return(
        <React.Fragment>
            <div className="Home">
            <div className="col-text">
            <img src={logo} alt="Platzi-conf logo"/>
            <p>
                <h1>BADGE MANAGEMENT SYSTEM </h1>
                <Link className="btn btn-primary" to="/badges">Start Now</Link>
            </p>
            </div>
            <div className="col-img">
                <img src={astro} alt="Astronauta"/>
            </div>
            </div>
            
        </React.Fragment>
    );
}
}

export default Start;