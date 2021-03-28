/* eslint-disable */
import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  // destructuring 문법 : ES6 신 문법
  // 글제목 : state데이터 / 글제목변경 : state 변경함수
  let [글제목, 글제목변경] = useState(['양말 추천', '고기 맛집', '초밥 맛집']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '영등포 맛집';

  function changeTitle() {
    var newArray = [...글제목];
    newArray[0] = '바지추천'
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ changeTitle }>숙제버튼</button>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ () => { 따봉변경(따봉 + 1) } }>👍</span> { 따봉 } </h3>
        <p>21.03.18일 1번 수행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>21.03.18일 2번 수행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p>21.03.18일 3번 수행</p>
        <hr/>
      </div>

      <Modal/>
      
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
