import React from 'react'
import './styles/BadgesList.css'
import {Link} from 'react-router-dom'
import Gravatar from './Gravatar'

class BadgesList extends React.Component {
    render(){
        if (this.props.badges.length == 0){
            return(
                <div>
                    <h3>
                        No encontramos badges
                    </h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Pulsa para agregar nuevo Badge
                    </Link>
                </div>
            );
        }

        return (
            <ul className="list-unstyled BadgesList">
                        {this.props.badges.map((badge)=>{
                            return(
                                <li key={badge.id} className="BadgesListItem">
                                    <Gravatar
                                    className="BadgesListItem__avatar"
                                    email={badge.email}
                                    alt={`${badge.firstName} ${badge.lastName}`}
                                    />
                                    <div>
                                        <div>
                                        <strong>{badge.firstName} {badge.lastName} </strong>
                                        </div>
                                        <div className="Twitter__name">
                                            <span className="Twitter__logo">
                                            </span>@{badge.twitter}
                                        </div>
                                        <div>
                                            {badge.jobTitle}
                                        </div>
                                    </div>                                    
                                </li>
                            )
                        })}
            </ul>  
        );
    }
}

export default BadgesList;