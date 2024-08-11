import React, { useState } from 'react';
import axios from 'axios';

function LoginForm({ onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();

        // 로그인 요청 (Spring Security와 통합)
        axios.post('http://localhost:8080/user/auth', { username, password })
            .then(() => {
                // 로그인 성공 시 authSuccess 엔드포인트를 호출하여 사용자 정보를 가져옵니다.
                axios.get('http://localhost:8080/authSuccess')
                    .then(response => {
                        onLoginSuccess(response.data); // 성공적으로 사용자 정보를 가져온 경우
                    })
                    .catch(error => {
                        console.error("Failed to get user info:", error);
                    });
            })
            .catch(error => {
                console.error("Login failed:", error);
                alert('로그인 실패. 아이디와 비밀번호를 확인하세요.');
            });
    };

    return (
        <form onSubmit={handleLogin}>
            <div>
                <label>아이디:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>비밀번호:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">로그인</button>
        </form>
    );
}

export default LoginForm;
