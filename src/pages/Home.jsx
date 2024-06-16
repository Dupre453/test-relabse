import React from 'react';
import Header from "../components/Header";
import UsersList from "../components/UsersList";
import EventsList from "../components/EventsList";

const Home = () => {
    return (
        <div>
            <Header/>
            <div className='flex flex-col items-center  mt-10'>

                <UsersList/>
                <EventsList/>
           </div>

        </div>
    );
};

export default Home;