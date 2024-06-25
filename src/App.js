import React, { useState } from 'react';
import './App.css';
import ImageComponent from './component/Image';
import Url from './component/Url'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [url, setUrl] = useState('');

  return (
    <>
      <Router>
        <Routes>
          <Route path="/image/*" element={<ImageComponent />} />
          <Route path="" element={<Url />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
