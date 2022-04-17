import React from 'react';
import { Carousel } from 'react-bootstrap';
import images2 from '../../images/gym3.avif';
import images3 from '../../images/gym8.avif';
import images4 from '../../images/gym9.png';
import images1 from '../../images/gym11.jpg';
import banner from '../../images/banner1.jpg';
const Slider = () => {

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
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
                        className="d-block w-100"
                        src={banner}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>David coaching studio</h3>
                        <p>Personal traning in david coaching studio</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner}
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