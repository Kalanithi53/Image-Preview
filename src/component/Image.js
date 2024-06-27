import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import ReactImageMagnifier from 'simple-image-magnifier/react';
import Zoom from "react-img-zoom-gdn";
import InnerImageZoom from 'react-inner-image-zoom';
export default function ImageComponent() {
    const location = useLocation();
    const path = location.pathname + location.search;
    const imageUrl = path.replace('/image/https:/', '');

   


    return (
        <div className=''>
            
            <InnerImageZoom src={`https://${imageUrl}`} width={"500px"}  />
           
        </div>
    );
}
