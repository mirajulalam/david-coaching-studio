import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Service.css';
const Service = ({ service }) => {
    const { user } = useAuthState(auth)
    const { name, picture, price, description } = service;
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            navigate('/checkout')
        }
    }, [user]);
    return (
        <div className='service'>
            <img src={picture} alt="" />
            <div className="sevice-details">
                <h5>{name}</h5>
                <p>${price}</p>
                <p><small>{description}</small></p>
                <button onClick={() => navigate('/checkout')} type="button" className="btn btn-primary">Book</button>
            </div>
        </div>
    );
};

export default Service;