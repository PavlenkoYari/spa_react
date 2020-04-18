import React from 'react';
import './Tabs.scss';
import {SmallUser} from "../User/SmallUser";


const HelpTabsArray = [
    {
        id: "tab1",
        title: "All Users"
    },
    {
        id: "tab2",
        title: "Check Users"
    }
];

export const Tabs = ({usersList, setActiveTab, activeTab, checkUser, checkUserList, loadingFetch, fetchUser}) => {
    return(
        <>
            <div className="tabs-top">
                {HelpTabsArray.map( tab =>
                    <Tab key={tab.id}
                         setActiveTab={setActiveTab}
                         tabId={tab.id}
                         tabTitle={tab.title}
                         activeTab={activeTab}/>
                 )}
            </div>
            <div className="tab-content">
                {HelpTabsArray.map( tab =>{
                    const data = tab.id === "tab1" ? usersList : checkUserList;
                    return <TabsContent key={tab.id}
                                        usersList={data}
                                        activeTab={activeTab}
                                        tabId={tab.id}
                                        checkUser={checkUser}
                                        loadingFetch={loadingFetch}
                                        fetchUser={fetchUser}/>
                })}
            </div>
        </>
    )
};


const TabsContent = ({tabId, usersList, activeTab, checkUser,loadingFetch, fetchUser}) => {
    const classShow = tabId === activeTab ? "show" : "";
    return (
        <div className={`tabs-panel ${classShow}`}>
            {usersList.length ?
                <>
                    {
                        usersList.map( user => {
                            const checkedUser = user.check ? "check" : "";
                            return(
                                <SmallUser checkedUser={checkedUser} user={user} checkUser={checkUser} key={user.phone}/>
                            )})
                    }
                    {tabId === "tab1" &&
                        <button className="show-more" onClick={() => fetchUser()} disabled={!loadingFetch}>
                            {
                                loadingFetch ? "Show More" : "Loading..."
                            }
                        </button>
                    }
                </>
                :
                <div className="message-not-found">Dont have check user</div>
            }
        </div>
    )
};

const Tab = ({setActiveTab, tabId, tabTitle, activeTab}) => <div className={`tab ${activeTab === tabId ? "active" : ""}`} onClick={() => setActiveTab(tabId)}>{tabTitle}</div>;