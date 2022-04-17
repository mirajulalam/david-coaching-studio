import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    const { name, picture, price, description } = service;
    const navigate = useNavigate();
    return (
        <div className='service'>
            <img src={picture} alt="" />
            <div className="sevice-details">
                <h5>{name}</h5>
                <p>${price}</p>
                <p><small>{description}</small></p>
                <button onClick={() => navigate('/checkout')} type="button" className="btn btn-primary">checkout</button>
            </div>
        </div>
    );
};

export default Service;