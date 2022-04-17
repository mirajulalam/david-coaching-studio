import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;