import React from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

const QueryImageComponent = () => {
    const location = useLocation();
    const path = location.pathname+location.search;
    console.log(path)
    const imageUrl = path.replace('/image/', '');

    return (
        <img src={imageUrl} alt="Query" width="700" className='items-center mt-10 mx-auto' />
    );
};

export default QueryImageComponent;
