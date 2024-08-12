import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

const HotelList = () => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await fetch('http://localhost:8080/hotel/showAll');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setHotels(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchHotels();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Hotel List</h1>
            <ul>
                {hotels.map((hotel, index) => (
                    <li key={hotel.id}>
                        <h2>{hotel.name}</h2>
                        <p>판매자ID: {hotel.sellerId}</p>
                        <p>가격: {hotel.price}</p>
                        <Link to={`/hotelone/${hotel.id}`}>상세보기</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HotelList;
