import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../App.css';

const QueryImageComponent = () => {
    const location = useLocation();
    const path = location.pathname +location.search;
    const imageUrl = path.replace('/image/https:/', '');
    const [adjustedHeight, setAdjustedHeight] = useState('800px');
    const [adjustedWidth,setAdjustedWidth]=useState('auto');
    useEffect(() => {
        const image = new Image();
        image.src = imageUrl;
        image.onload = () => {
            const { naturalHeight, naturalWidth } = image;
            if (naturalHeight > 600 && naturalWidth < 500) {
                setAdjustedHeight('450px');
                setAdjustedWidth('500px');
            } else if (naturalHeight > 600) {
                setAdjustedHeight('450px');
            }
        };
        // Clean up image object
        return () => {
            image.onload = null;
        };
    }, [imageUrl]);
    return (
        <img
            src={imageUrl}
            alt="Query"
            style={{ height: adjustedHeight, width: adjustedWidth }}
            className='items-center mt-10 mx-auto'
        />
    );
};

export default QueryImageComponent;
