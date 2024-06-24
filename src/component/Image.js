import React from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
const QueryImageComponent = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const imageUrl = queryParams.get('imageurl') || 'https://via.placeholder.com/300';

    return (
            <img src={imageUrl} alt="Query" width="700" className='items-center mt-10 mx-auto' />
    );
};

export default QueryImageComponent;
