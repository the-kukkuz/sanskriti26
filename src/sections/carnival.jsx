import React from 'react';
import './Carnival.css'; // Assuming you have a CSS file for styles and animations

const Carnival = () => {
    return (
        <section className="carnival-section">
            <h2>MACE Carnival</h2>
            <img 
                src="path_to_carnival_poster.jpg" // Replace with actual image path
                alt="MACE Carnival Poster"
                className="carnival-poster"
            />
            <div className="event-details">
                <h3>Event Details</h3>
                <p>Date: 6th & 7th March</p>
                <p>Join us for an exciting carnival filled with games, prizes, and fun. Immerse yourself in a festive atmosphere and celebrate the spirit of the event with us!</p>
            </div>
        </section>
    );
};

export default Carnival;