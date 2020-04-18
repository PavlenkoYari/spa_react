import React from "react";
import './User.scss'

export const BigUser = ({user}) => {
    const dateFormat = user.dob.date.slice(0, user.dob.date.indexOf('T')).split('-');
    return(
        <div className="user-wrapper">
            <div className="user-block">
                <div className="user-avatar">
                    <img src={user.picture.large} alt="home"/>
                </div>
                <div className="user-info">
                    <span className="text-opt">Name:</span> {user.name.first} {user.name.last} ({user.gender})
                </div>
                <div className="user-info">
                    <span className="text-opt">Date:</span> {dateFormat[2]} {dateFormat[1]} {dateFormat[0]}
                </div>
                <div className="user-info">
                    <span className="text-opt">Address:</span> {user.location.street.name} {user.location.street.number}
                </div>
                <div className="user-info">
                    <span className="text-opt">Email:</span> {user.email}
                </div>
                <div className="user-info">
                    <span className="text-opt">Tel:</span> {user.phone}
                </div>


            </div>
        </div>
    )
};