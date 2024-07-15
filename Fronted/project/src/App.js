import React from 'react';
import './App.css';
import StudentList from './Components/StudentList';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import { Route,Routes } from 'react-router-dom';

const App = () => {
    return (
        <div className="App">
            
     


      <Navbar/>
      
      <Routes >

        <Route path="/" element={ <HomePage></HomePage>} />
        <Route path="/student" element={<StudentList />} />
        
      </Routes>

      </div>

    );
};

export default App;
