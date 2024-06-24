import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

const QueryImageComponent = () => {
    const location = useLocation();
    const path = location.pathname +location.search;
    const imageUrl = path.replace('/image/https:/', '');
    const [adjustedHeight, setAdjustedHeight] = useState('800px');
    
    const handleImageLoad = (event) => {
        const imageHeight = event.target.naturalHeight;
        if (imageHeight > 600) {
            setAdjustedHeight('450px');
        }
        
    };

    return (
        <img
        src={`https://${imageUrl}`} 
            alt="Query"
            width={adjustedHeight}
            height={"auto"}
            className='items-center mt-10 mx-auto'
            onLoad={handleImageLoad}
        />
    );
};

export default QueryImageComponent;
