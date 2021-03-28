# React Study
# **코딩애플** 유튜브 강의를 통해 공부함

# Why Web-app ?

1. 모바일앱으로 발행이 쉬움

2. 앱처럼 뛰어난 UX

3. 그냥 웹사이트보다 비즈니스적 감점

# 설치 / 셋팅

1. 런타임 
    + Nodejs 설치 : v14.16.0(lts)

2. 에디터
    + vs code

3. react 프로젝트 생성
    + npx create-react-app blog

# 프로젝트 실행

## `npm start`

# 프로젝트 설명

+ App.js : 메인페이지에 들어갈 HTML 코드

+ public/index.html : 메인페이지

+ *App.js -src/index.js-> index.html*

+ public : static 파일 보관함

+ src : 소스코드 보관함

# JSX

Html 대응

+ class 대신 className 사용

+ 데이터 바인딩이 쉬워짐 -> 리엑트 최대 장점
### ₩ { 변수, 함수 등 } ₩

# 3일차 강의

+ 데이터는 1.변수에 넣거나 2. state에 넣음

    + state 만드는법
        1. {ustState} 상단에 첨부
        2. useState(데이터)
    + state
        1. 변수 대신 쓰는 데이터 저장공간
        2. useState()를 이용해 만듦
        3. 문자, 숫자, arraym object 다 가능함
    + state 사용 이유.
        1. web이 App처럼 동작하게 만들고 싶기때문
        2. state가 변경되면, HTML이 자동으로 재렌더링이 됨.
    + 자주 바뀌고 중요한 데이터는 State로 만듦


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
