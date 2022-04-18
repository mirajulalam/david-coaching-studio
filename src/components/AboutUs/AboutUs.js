import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import aboutImg from '../../images/IMG_1281.JPG';
import './AboutUs.css';
const AboutUs = () => {
    return (
        <div className='container about'>
            <img src={aboutImg} alt="" />
            <h3>Name : Mirajul Alam Alif</h3>
            <h5>My mission: My mission is Professional web developer.I am  learning and be a succesfull web developer.I am learning for the my best.I went to be a Successful web developer.I try my best to successful my dream.</h5>
        </div>
    );
};

export default AboutUs;