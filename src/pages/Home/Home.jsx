import React, { useContext } from 'react';
import Banner from '../../components/Banner';
import AuthContext from '../../context/AuthContext';
import Features from '../../components/Features';

const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
        </div>
    );
};

export default Home;