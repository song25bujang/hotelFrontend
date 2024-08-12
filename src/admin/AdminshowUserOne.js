import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BasketByUser from "../basket/BasketByUser";

const AdminshowUserOne = () => {
    const { id } = useParams();  // URL 파라미터에서 id를 추출합니다.
    const [user, setUser] = useState(null);  // 사용자 데이터는 단일 객체로 저장
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {// 서버에서 사용자 정보를 가져오는 함수
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:8080/user/${id}`);  // 실제 API 엔드포인트로 변경
                if (!response.ok) {
                    throw new Error('네트워크 응답이 올바르지 않습니다.');
                }
                const data = await response.json();
                setUser(data);  // 사용자 데이터를 상태에 저장
            } catch (error) {
                setError(error.message);  // 오류 메시지를 상태에 저장
            } finally {
                setLoading(false);  // 로딩 상태를 false로 설정
            }
        };

        fetchUser();  // 컴포넌트가 마운트될 때 데이터 가져오기
    }, [id]);  // id가 변경될 때마다 데이터 요청

    if (loading) return <p>로딩 중...</p>;  // 로딩 중일 때 표시할 내용
    if (error) return <p>오류: {error}</p>;  // 오류가 발생했을 때 표시할 내용

    return (
        <div>
            <h1>관리자 페이지</h1>
            <p>여기서 관리 작업을 수행할 수 있습니다.</p>
            {user ? (
                <div>
                    <h2>사용자 정보</h2>
                    <p>이름: {user.username}</p>
                    <p>역할: {user.role}</p>
                </div>
            ) : (
                <p>사용자 정보를 찾을 수 없습니다.</p>
            )}
            console.log("사용자id:",{user.id})
            <BasketByUser userid={user.id}/>
        </div>
    );
}

export default AdminshowUserOne;
