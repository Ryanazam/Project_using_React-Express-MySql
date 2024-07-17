import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Card.css'
const StudentList = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:3005/api/students/image');
                setCard(response.data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);

    return (
        
        <div className="student-card-container">
        {card.map((card, index) => (
            <div className="student-card" key={index}>
                <img src={card.imageUrl} alt='ohto' className="student-image" />
                <div className="student-details">
                    <h3>{card.caption}</h3>
                
                </div>
            </div>
        ))}
    </div>
    );
};

export default StudentList;
