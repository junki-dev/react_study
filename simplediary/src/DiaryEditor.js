import { useRef, useState } from "react";

const DiaryEditor = () => {
  const authorInput = useRef();
  const contentInput = useRef();

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
    if (state.author.length < 1) {
      // authorInput.current : author input 태그
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    alert(`저장 성공!`);
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <h2>오늘의 감정점수 : </h2>
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
