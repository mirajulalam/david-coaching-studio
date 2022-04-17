import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';
import banner from '../../images/gym.webp';
import banner1 from '../../images/gym13.avif';
import banner2 from '../../images/gym15.avif';
const Slider = () => {

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block slider"
                        src={banner}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>David coaching studio</h3>
                        <p>Personal traning in david coaching studio</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block slider"
                        src={banner1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>David coaching studio</h3>
                        <p>Personal traning in david coaching studio</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block slider"
                        src={banner2}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>David coaching studio</h3>
                        <p>Personal traning in david coaching studio</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;