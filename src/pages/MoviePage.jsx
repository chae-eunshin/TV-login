import React from "react";
import {movies} from '../components/MovieDummy';
import { useParams } from 'react-router-dom';
import NotFound from "./NotFound";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function MoviePage() {
    let { title } = useParams();
    
    // URL의 title과 일치하는 영화 정보 찾기
    const movie = movies.results.find(movie => movie.title === title);
  
    return (
      <div>
        {movie ? ( //movies 배열에서 제목이 일치하는 값을 찾지 못하면 즉 없는 값이면 movie에 undefined가 담김 그리고 자바스크립트는 이를 false로 봄 
          <div style={{display:"flex", alignItems:"row"}}>
          <div><img src={IMG_BASE_URL + movie.poster_path} alt="영화 포스터" style={{width:"200px",height:"300px"}} /></div>
          <div style={{padding:"1% 0 20% 3%"}}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
          </div>
        ) : (
        <NotFound/>
        )}
      </div>
    );
  }