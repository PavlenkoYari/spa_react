import React from "react";
import {Link} from "react-router-dom";
import './User.scss'

export const SmallUser = ({user, checkedUser, checkUser}) => {
    return(
        <div className="user-wrapper">
            <div className={`square-wrapper ${checkedUser}`} onClick={() => checkUser(user.phone)}>
                <div className="square" />
            </div>
            <Link to={`/user/${user.phone}`} className="user-block">
                <div className="user-avatar">
                    <img src={user.picture.large} alt="home"/>
                </div>
                <div className="user-name">
                    {user.name.first} {user.name.last}
                </div>
            </Link>
        </div>
    )
};