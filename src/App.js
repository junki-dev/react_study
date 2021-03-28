import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '영등포 맛집'
  function 함수() {
    return 100
  }
  
  return (
    <div className="App">
      <div className="black-nav">
        <div style={ { color : 'blue', fontSize : '30px' } }>개발 Blog</div>
      </div>
      <h4> { posts } </h4>
      <h4> { 함수() } </h4>
      <img src={ logo } />
    </div>
  );
}

export default App;
