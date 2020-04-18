import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { BigUser } from './BigUser'

const putStateToProps  = (state) => {
    return{
        usersList: state.usersList
    }
};
const User = ( props ) => {
    const { usersList } = props;
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const getUserData = () => {
        const user = usersList.filter( user => user.phone === id);
        setUser(user);
    };

    useEffect( () => {
        document.title = "User";
        getUserData();

    }, []);

    return(
        <div className="user-page">
            <div className="title">User details</div>
            {user.length ?
                <BigUser user={user[0]}/>
                :
                <div className="user-not-found">User Not Found</div>
            }
        </div>
    )
};

export default connect(putStateToProps)(User);