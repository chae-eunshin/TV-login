import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 임포트

export default function Login() {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleLoginClick = () => {
        navigate('/login'); // 로그인 페이지로 이동
    };

    return (
        <div style={{ display: "flex", alignItems: "row", paddingLeft: "20px" }}>
            <button onClick={handleLoginClick} style={{ width: "100px", height: "30px", marginRight: "20px", marginTop: "13px", borderRadius: "20px" }}>로그인</button>
        </div>
    );
}
