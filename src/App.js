import logo from './logo.svg';
import './App.css';
import QueryImageComponent from './component/Image';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
   
        <Routes>
          <Route path="/image" element={<QueryImageComponent />} />
        </Routes>
   
    </Router>
  );
}

export default App;
