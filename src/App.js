import React from 'react';
import './App.css';
import ImageComponent from './component/Image';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/image/*" element={<ImageComponent />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
