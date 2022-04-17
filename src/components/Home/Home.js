import React from 'react';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <h1>This is home</h1>
        </div>
    );
};

export default Home;