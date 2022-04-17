import React from 'react';
import './Service.css';
const Service = ({ service }) => {
    const { name, picture, price, description } = service;
    return (
        <div className='service'>
            <img src={picture} alt="" />
            <div className="sevice-details">
                <h5>{name}</h5>
                <p>${price}</p>
                <p><small>{description}</small></p>
                <button type="button" class="btn btn-primary">checkout</button>
            </div>
        </div>
    );
};

export default Service;