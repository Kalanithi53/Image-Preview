import React, { useState } from 'react';
import '../App.css';

function Url() {
  const [url, setUrl] = useState('');

  return (
    <>
      
      <div className="bg-white w-full h-full">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Image</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">Enter the URL of the image</p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <input 
                  type="text" 
                  className="p-2 rounded" 
                  placeholder="Enter the URL" 
                  name="url" 
                  value={url} 
                  onChange={(e) => setUrl(e.target.value)} 
                />
                <a 
                  href={`/image/${url}`} 
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Go!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Url;
