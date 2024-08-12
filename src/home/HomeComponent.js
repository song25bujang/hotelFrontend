// src/HomeComponent.js

import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import HotelList from "./HotelList";

function HomeComponent() {
    const [data, setData] = useState('');

    useEffect(() => {
        // Spring Boot 서버의 /user 엔드포인트에 GET 요청을 보냄
        fetch('http://localhost:8080/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => setData(data))
            .catch(error => console.error('Error fetching user:', error));
    }, []);

    return (
        <div>
            <h2>{data}</h2>{/* 서버로부터 받은 데이터를 출력 */}
            <Link to={`/admin/users`}>관리자 페이지</Link>
            <HotelList />
        </div>
    );
}
export default HomeComponent;
