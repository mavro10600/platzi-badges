import React from 'react';
import Navbar from '../components/Navbar';
import header from '../images/barco1.jpg';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
    render(){
        return (
            <div>
                <Navbar />
                <div className ="BadgeNew__hero">
                    <img className= "img-fluid" src={header} alt="Logo"/>                
                </div>

                <div className="container">
                    <div className = "row">
                        <div className="col">
                            <Badge firstname="Mauro"
                            lastName="Rivero"
                            jobTitle="frontend Engineer"
                            twitter="risky_mav"/>

                        </div>
                    </div>

                </div>
            </div>
        )
        
    }
}

export default BadgeNew;