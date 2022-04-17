import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div className='bg-primary text-white text-center mt-5 p-4'>
            <p><small>copyright &copy;{currentYear}. Design By Mirajul Alif</small></p>
        </div>
    );
};

export default Footer;