import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/HomePage';
import Students from './Components/StudentList';
import './App.css'; // Optional: Import CSS for styling

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home />;
            case 'students':
                return <Students />;
            default:
                return <Home />;
        }
    };

    return (
        <div>
            <Navbar setCurrentPage={setCurrentPage} />
            {renderPage()}
        </div>
    );
}

export default App;
