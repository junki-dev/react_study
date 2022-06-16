import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import OptimizeTest from "./OptimizeTest";

// const dummyList = [
//   {
//     id: 1,
//     author: "김준기",
//     content: "하이 1",
//     emotion: 1,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "황혜진",
//     content: "하이 2",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "송성현",
//     content: "하이 3",
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 4,
//     author: "박신웅",
//     content: "하이 4",
//     emotion: 4,
//     created_date: new Date().getTime(),
//   },
// ];

// https://jsonplaceholder.typicode.com/comments

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date,
      };
      return [newItem, ...state];
    }
    case "REMOVE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    case "EDIT": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, content: action.newContent } : it
      );
    }
    default:
      return state;
  }
};

export const DiaryStateContext = React.createContext();

/**
 * 중첩 Context를 함으로써 dispatch 함수를 위한 context를 따로 생성해줘야 한다.
 * 그렇지 않으면, 리렌더링 되어 최적화가 풀린다.
 */
export const DiaryDispatchContext = React.createContext();

function App() {
  // const [data, setData] = useState([]);
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });

    // setData(initData);
    dispatch({ type: "INIT", data: initData });
  };

  const onCreate = useCallback((author, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: { author, content, emotion, id: dataId.current },
    });

    // const created_date = new Date().getTime();
    // const newItem = {
    //   author,
    //   content,
    //   emotion,
    //   created_date,
    //   id: dataId.current,
    // };

    dataId.current += 1;
    // 함수형 업데이트
    // 최신의 데이터를 받아와 처리하기 때문에 useCallback의 depth를 비워둘 수 있다.
    // setData((data) => [newItem, ...data]);
  }, []);

  const onRemove = useCallback((targetId) => {
    dispatch({ type: "REMOVE", targetId });
    // console.log(`${targetId}가 삭제되었습니다.`);
    // const newDiaryList = data.filter((it) => it.id !== targetId);
    // setData((data) => data.filter((it) => it.id !== targetId));
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    dispatch({ type: "EDIT", targetId, newContent });
    // setData((data) =>
    //   data.map((it) =>
    //     it.id === targetId ? { ...it, content: newContent } : it
    //   )
    // );
  }, []);

  useEffect(() => {
    getData();
  }, []);

  /**
   * useMemo를 사용하는 이유는 재생성 되지 않게 하기 위함이다.
   * */
  const memoizedDispatches = useMemo(() => {
    return { onCreate, onRemove, onEdit };
  }, []);

  /* 메모이제이션 기법 사용
   * data.length 가 변경되지 않으면 다시 계산하지 않고 이전과 동일한 결과를 return 한다.
   * 함수가 아닌 값을 반환한다.
   */
  const getDiaryAnalysis = useMemo(() => {
    // console.log(`일기 분석 시작`);

    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;

    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={memoizedDispatches}>
        <div className="App">
          {/* <Lifecycle /> */}
          {/* <OptimizeTest /> */}
          <DiaryEditor />
          <div>전체 일기: {data.length}</div>
          <div>기분 좋은 일기 개수: {goodCount}</div>
          <div>기분 나쁜 일기 개수: {badCount}</div>
          <div>기분 좋은 일기 비율: {goodRatio}</div>
          <DiaryList />
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
