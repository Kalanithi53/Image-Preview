import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

const QueryImageComponent = () => {
    const location = useLocation();
    const path = location.pathname + location.search;
    const imageUrl = path.replace('/image/https:/', '');
    const [adjustedHeight, setAdjustedHeight] = useState("auto");
    const [width, setWidth] = useState("900px");

    const handleImageLoad = (event) => {
        const imageHeight = event.target.naturalHeight;
        if (imageHeight > 600) {
            setAdjustedHeight('450px');
            setWidth('600px');
        }
    };

    const handleImageIn = () => {
        const currentWidth = parseInt(width);
        const currentHeight = adjustedHeight === "auto" ? "auto" : parseInt(adjustedHeight);

        if (currentHeight !== "auto") {
            setWidth(`${currentWidth + 100}px`);
            setAdjustedHeight(`${parseInt(currentHeight) + 100}px`);
        } else {
            setWidth(`${currentWidth + 100}px`);
        }
    };

    const handleImageOut = () => {
        const currentWidth = parseInt(width);
        const currentHeight = adjustedHeight === "auto" ? "auto" : parseInt(adjustedHeight);

        if (currentHeight !== "auto") {
            setWidth(`${currentWidth - 100}px`);
            setAdjustedHeight(`${parseInt(currentHeight) - 100}px`);
        } else {
            setWidth(`${currentWidth - 100}px`);
        }
    };

    return (
        <>
            <img
                src={`https://${imageUrl}`}
                alt="Query"
                width={width}
                height={adjustedHeight}
                className='items-center mt-10 mx-auto'
                onLoad={handleImageLoad}
            />
            <div className='fixed mb-10 bottom-0'>
                <div className='w-[100px] border border-gray shadow-lg rounded-[10px] flex p-2 divide-x divide-slate-950'>
                    <div className='w-[50%] cursor-pointer grid justify-items-start' onClick={handleImageIn}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                        </svg>
                    </div>
                    <div className='w-[50%] cursor-pointer grid justify-items-end ml-1' onClick={handleImageOut}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM13.5 10.5h-6" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QueryImageComponent;
