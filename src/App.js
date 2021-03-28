import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  // destructuring 문법 : ES6 신 문법
  // 글제목 : state데이터 / 글제목변경 : state 변경함수
  let [글제목, 글제목변경] = useState(['양말 추천', '고기 맛집', '초밥 맛집']);

  let posts = '영등포 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> { 글제목[0] } </h3>
        <p>21.03.18일 1번 수행</p>
        <hr/>
        <h3> { 글제목[1] } </h3>
        <p>21.03.18일 2번 수행</p>
        <hr/>
        <h3> { 글제목[2] } </h3>
        <p>21.03.18일 3번 수행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
