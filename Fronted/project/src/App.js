import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Page/Homepage/HomePage';
import Students from './Components/StudentList/StudentList';
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
