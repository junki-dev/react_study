import React, { useEffect, useState } from "react";

/* 예시 1 */
// // React.mom를 사용해 text가 바뀔 때만 리렌더링 됨
// const TextView = React.memo(({ text }) => {
//   useEffect(() => {
//     console.log(`Update :: Text : ${text}`);
//   });
//   return <div>{text}</div>;
// });

// // React.mom를 사용해 count가 바뀔 때만 리렌더링 됨
// const CountView = React.memo(({ count }) => {
//   useEffect(() => {
//     console.log(`CountA Update - count : ${count}`);
//   });
//   return <div>{count}</div>;
// });
/* / 예시 1 */

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA Update - count: ${count}`);
  });
  return <div>{count}</div>;
});

const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`CounterB Update - count: ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

/*객체의 React.memo 얕은 복사에 의한 리렌더링 이슈 해결
 * https://ko.reactjs.org/docs/react-api.html#reactmemo
 */
const areEqual = (prevProps, nextProps) => {
  return prevProps.obj.count === nextProps.obj.count;
  //   return true; // 이전 프롭스와 현재 프롭스가 같다 -> 리렌더링 일으키지 않음
  //   return false; // 리렌더링을 일으킨다.
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  /* 예시 1 */
  //   const [count, setCount] = useState(1);
  //   const [text, setText] = useState("");
  /* / 예시 1 */

  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      {/* 예시 1 */}
      {/* <div>
        <h2>count</h2>
        <CountView count={count} />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h2>text</h2>
        <TextView text={text} />
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div> */}
      {/* / 예시 1 */}

      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button </button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button onClick={() => setObj({ count: obj.count })}>B button</button>
      </div>
    </div>
  );
};

export default OptimizeTest;
