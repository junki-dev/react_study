# 컴포넌트 트리를 그려보자

## 같은 레벨끼리는 데이터를 주고 받지 않는다.

### 같은 레벨끼리 데이터가 오가야 한다면, state를 사용하자

## 데이터는 위에서 아래로 흐르며, 단방향으로만 데이터가 흐른다.

## 이벤트는 아래에서 위로 흐른다.

# 클래스형은 함수형에 비해 코드양이나 중복코드가 많다. 그래서 함수형을 대부분 사용한다.

# 컴포넌트는 언제 렌더링이 일어나는가?

1. 본인이 갖고 있는 state에 변화가 생겼을 때
2. 부모 컴포넌트에 리렌더링이 일어났을 때
3. 자신이 받은 prop이 변경되었을 때

# 그냥 거쳐만 가는 prop이 존재한다.(props drilling)

## 이를 위해 context라는 개념이 있다.

## context는 provider 컴포넌트 안에 있는 컴포넌트들이다.

## provider 컴포넌트에서 데이터를 직통으로 전달해 props drilling이 일어나지 않게 할 수 있다.

```javascript
const MyContext = React.createContext(defaultValue);

<MyContext.Provider value={전역으로 전달하고자하는 값}>
  {/* 이 Context 안에 위치할 자식 컴포넌트들 */}
</MyContext.Provider>
```
