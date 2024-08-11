import React from "react";
import { useParams } from "react-router-dom";

function UserPage({ users }) {
    // URL에서 id 파라미터를 가져옵니다.
    const { id } = useParams();

    // id를 숫자로 변환한 후 해당 id와 일치하는 사용자를 찾습니다.
    const user = users.find(user => user.id === Number(id));

    // 사용자가 존재하면 정보를 표시하고, 그렇지 않으면 오류 메시지를 표시합니다.
    return user ? (
        <article>
            <h1>마이페이지</h1>
            <h3>회원명: {user.username}</h3>
            <h3>회원등급: {user.role}</h3>
            <h3>닉네임: {user.nickname}</h3>
        </article>
    ) : (
        <p>사용자를 찾을 수 없습니다.</p>
    );
}

export default UserPage;
