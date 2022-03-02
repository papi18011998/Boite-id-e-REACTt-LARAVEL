import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import AddIdee from './components/addIdee';
import ViewIdee from './components/viewIdee';

import axios  from 'axios';
axios.defaults.baseURL = "https://box-ideas.herokuapp.com/api/ideas/";

function App() {
  return (
    <div className="App">
     <Router>
    
        <Routes>
            <Route exact={true} path="/ideas" element={<ViewIdee />} />
            <Route exact={true} path="/" element={<AddIdee/>} />
        </Routes>
        
    </Router>
    </div>
  );
}

export default App;
