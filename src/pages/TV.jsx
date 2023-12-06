import React, { useState } from "react";
import { Tv } from "../components/TvDummy";
import { AppContainer, MovieContainer, MovieImage, MovieInfo, MovieTitle, MovieInfoText } from "../Movie.style";
import Detail from "./Detail";


const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function TV() {
  const [selectedTv, setSelectedTv] = useState([]); //기본은 빈 배열 상태

  const handleTvClick = (Tv) => {
    setSelectedTv(prevSelectedTv => { //set함수에 전달된 상태 업데이트 함수의 매개변수는 이름과 상관없이 이전 상태를 참조하기 위함임
      const isAlreadySelected = prevSelectedTv.some(selectedTv => selectedTv.id === Tv.id);//some은 배열에서 조건을 만족하는 요소가 하나라도 있으면 true를 반환하는 메서드// 유저가 고른 영화들 중에 현재 클릭한 item과 아이디가 일치하는게 있으면 true
      if (isAlreadySelected) { //true라는 건 현재 영화의 아이디가 기존에 고른 영화들 중에 있다는 의미임
        return prevSelectedTv.filter(selectedTv=> selectedTv.id !== Tv.id); //이 영화는 이미 배열에 있는데 클릭을 했으므로 선택한 영화에서 빼줌 -> 영화 소개를 닫음 
      } else { //기존에 고른(소개를 열어놓은) 영화들 중에 없는 영화를 클릭함
        return [...prevSelectedTv, Tv]; //열어놓을 영화들에 추가함
      } //... 이게 스프레드 연산자라고 함 이건 기존의 배열을 복사하겠다는 의미고 뒤에 붙여놓은 요소가 새로운 배열에 추가할 요소인 거..기존의 배열을 훼손하지 않고 불변성을 지키는 것임
    }); 
  };//some,filter 모두 자바스크립트의 배열 메서드 둘 다 콜백함수를 매개변수로 받음, 콜백함수는 배열의 각 요소들에 대해 실행이 됨

  const IsTvselected = (tvId) => {
    return selectedTv.some(tv => tv.id === tvId); //선택된(소개를 열어놓은) 영화들 중에 지금 클릭한 영화의 아이디와 일치하는 영화가 있으면 true를 리턴해줌
  };
  return (
    <div>
      <AppContainer>
      {Tv.results.map((item) => (
          <MovieContainer key={item.id} onClick={() => handleTvClick(item)}>
            {IsTvselected(item.id) ? ( //지금 클릭한 영화가 배열 안에 있는지 
              <Detail overview={selectedTv.find(Tv => Tv.id === item.id).overview} /> //있으면 영화 소개를 표시함 find는 조건이 참을 만족하는 첫번쨰 요소를 반환한다고 함
            ) : ( //리액트는 여러 컴포넌트를 반환할 때 하나의 부모요소로 감싸야함 이때 fragment(빈 태그)를 사용할 수 있음
              <> 
                <MovieImage src={IMG_BASE_URL + item.poster_path} alt="영화 포스터" />
                <MovieInfo>
                  <MovieTitle>{item.title}</MovieTitle>
                  <MovieInfoText>{item.vote_average}</MovieInfoText>
                </MovieInfo>
              </>
            )}
          </MovieContainer>
        ))}
      </AppContainer>
    </div>
  );
}
