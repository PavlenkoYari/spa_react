import React, {useEffect, useState} from "react";
import './Home.scss';
import { Tabs } from "../Tabs/Tabs";
import { bindActionCreators } from "redux";
import { setUserList } from "../../store/action/user";
import { connect } from "react-redux";

const putStateToProps  = (state) => {
    return{
        usersList: state.usersList
    }
};
const putDispatchToProps = (dispatch) => {
    return{
        setUserList: bindActionCreators(setUserList, dispatch)
    }
};


const Home = ( {usersList, setUserList} ) => {

    const [activeTab, setActiveTab] = useState('tab1');
    const [loadingFetch, setStatusFetch] = useState(true);
    const fetchUser = () => {
        setStatusFetch(false);
        fetch('https://randomuser.me/api/?results=20&noinfo')
            .then(res => res.json())
            .then(async users => {
                const usersArray = users.results.map( user => user = {...user, check: false});
                await setUserList([...usersList, ...usersArray]);
                setStatusFetch(true);
            });

    };
    useEffect(() => {
        document.title = "Home";
        fetchUser()
    }, []);


    const checkUser = ( userId ) => {
        const newCheckUser = usersList.map( user => {
            if(user.phone === userId){
                user.check = !user.check
            }
            return user
        });
        setUserList(newCheckUser);
    };
    const getCheckUser = () => {
        let checkUserArray = [];
        usersList.forEach( user => {
            if(user.check){
                checkUserArray = [...checkUserArray, user];
            }
        });
        return checkUserArray;
    };

    return(
        <div className="container">
            <h1 className="title">User List</h1>
            {usersList.length ?
                <>
                    <Tabs usersList={usersList}
                          checkUserList={getCheckUser()}
                          setActiveTab={setActiveTab}
                          activeTab={activeTab}
                          checkUser={checkUser}
                          fetchUser={fetchUser}
                          loadingFetch={loadingFetch}/>

                </>
                :
                <div className="loading">Loading....</div>
            }
        </div>
    )
};

export default connect(putStateToProps, putDispatchToProps)(Home);