import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

const QueryImageComponent = () => {
    const location = useLocation();
    const path = location.pathname +location.search;
    const imageUrl = path.replace('/image/https:/', '');
    const [adjustedHeight, setAdjustedHeight] = useState('auto');
    
    const handleImageLoad = (event) => {
        const imageHeight = event.target.naturalHeight;
        if (imageHeight > 600) {
            setAdjustedHeight('600px');
        }
        
    };

    return (
        <img
        src={`https://${imageUrl}`} 
            alt="Query"
            width="700"
            height={adjustedHeight}
            className='items-center mt-10 mx-auto'
            onLoad={handleImageLoad}
        />
    );
};

export default QueryImageComponent;
