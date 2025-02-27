/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Banner from '../../components/Banner';
import AuthContext from '../../context/AuthContext';
import Features from '../../components/Features';
import TopDelevary from '../../components/TopDelevary';

const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <TopDelevary></TopDelevary>
        </div>
    );
};

export default Home;