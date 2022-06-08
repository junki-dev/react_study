import { useState } from "react";

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    /* spread 연산자(...)는 앞에 와야 한다.
     * 위 -> 아래, 좌 -> 우 로 실행되기 때문에 뒤에 올 경우 값이 원래의 값으로 덮어써져서 변경되지 않는다.
     */
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const hanldeSubmit = () => {
    console.log(state);
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        오늘의 감정점수:
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={hanldeSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
