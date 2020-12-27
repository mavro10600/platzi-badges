import React from 'react';
import confLogo from '../images/Robotics-rafiki.svg';
import "./styles/Badge.css";

class Badge extends React.Component {

render(){
    
const firstName= "Mauro";
const lastName= "Rivero";

    return (
    <div className="Badge">
        <div className = "Badge__header">
            <img src={confLogo} alt="Logo"></img>
        </div>
        <div className = "Badge__section-name">
            <img className = "Badge__avatar" src="https://gravatar.com/avatar?d=identicon" alt="Avatar"></img>
    <h1 >{this.props.firstName}<br / > {this.props.lastName}</h1>
        </div>
        <div className = "Badge__section-info">
            <h3>{this.props.jobTitle}</h3>
    <div>@{this.props.twitter}</div>
        </div>

        <div className = "Badge__footer">
            #Platziconf
        </div>
    </div>)
}
}

export default Badge;