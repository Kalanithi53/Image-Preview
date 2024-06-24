import React from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

const QueryImageComponent = () => {
    const location = useLocation();

    const path = location.pathname+location.search;

    const imageUrl = path.replace('/image/https:/', '');

    return (
        <img src={`https://${imageUrl}`} alt="Query" width="700" className='items-center mt-10 mx-auto' />
    );
};

export default QueryImageComponent;
