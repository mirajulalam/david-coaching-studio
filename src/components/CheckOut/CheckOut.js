import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CheckOut.css';
const CheckOut = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault();
        toast('thank you for the booking')
    }
    return (
        <div className='w-50 mx-auto mb-5 checkout'>
            <h1 className='text-center text-primary mt-3'>Welcome to check out page</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control onBlur={handlePhoneBlur} type="text" placeholder="Enter phone" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <ToastContainer />
            </Form>
        </div>
    );
};

export default CheckOut;