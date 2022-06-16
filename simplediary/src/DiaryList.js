import { useContext } from "react";
import { DiaryStateContext } from "./App";
import DiaryItem from "./DiaryItem";

const DiaryList = () => {
  const diaryList = useContext(DiaryStateContext);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} /> // ... 연산자로 보내면 prop으로 it의 모든 데이터가 넘아감
        ))}
      </div>
    </div>
  );
};

// DiaryList.defaultProps = {
//   diaryList: [],
// };

export default DiaryList;
