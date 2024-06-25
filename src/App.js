import React from 'react';
import './App.css';
import QueryImageComponent from './component/Image';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/image/*" element={<QueryImageComponent />} />
      </Routes>
    </Router>
   
    </>
  );
}

export default App;
