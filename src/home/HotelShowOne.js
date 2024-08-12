import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const HotelShowOne = () => {
    const { id } = useParams();  // URL 파라미터에서 id를 추출합니다.
    const [hotel, setHotel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // console.log("선택한 hotelid: ",id);
    useEffect(() => {
        const fetchHotel = async () => {
            try {
                const response = await fetch(`http://localhost:8080/hotel/showOne/${id}`);
                if (!response.ok) {
                    throw new Error('네트워크 응답이 올바르지 않습니다.');
                }
                const data = await response.json();
                setHotel(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchHotel();
    }, [id]);

    if (loading) return <p>로딩 중...</p>;
    if (error) return <p>오류: {error}</p>;

    return (
        <div>
            {hotel ? (
                <div>
                    <h1>{hotel.name}</h1>
                    <p>판매자 ID: {hotel.sellerId}</p>
                    <p>가격: {hotel.price}</p>
                    {/* 추가 세부 사항을 여기에 추가하세요 */}
                </div>
            ) : (
                <p>호텔을 찾을 수 없습니다.</p>
            )}
        </div>
    );
};

export default HotelShowOne;
