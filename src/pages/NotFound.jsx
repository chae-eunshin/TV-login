import React from "react";
import {Link} from 'react-router-dom';
export default function NotFound(){
    return(<>  
        <h1 style={{color:"red"}}>해당 페이지를 찾을 수 없습니다.</h1>
        <p>주소가 잘못되었거나 더 이상 존재하지 않는 페이지입니다.</p>
        <Link to={`/`}>
          <p>메인 페이지로 이동하기</p>
        </Link>
        </>)
;}