# Vite 프로젝트

- Theme 를 이용한 테마 변경
- 대시보드
- Map
- 게시판 및 테이블 데이터
- 개인정보
- 사용 기술

참고사항(작성법)

- '[]' 내에 문구 작성, '()' 으로 URL 경로 넣으면 Link 생성
  > [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- ``(명칭 : 백틱) 내에 사용하면 영역강조
  > Configure the top-level `parserOptions` property like this:
- 코드 영역으로 작성하는것은 백틱3개 + js 로 시작하여 백틱3개 로 끝나면됨

````js
// ```js 로 시작하여 ```로 끝냄
export default {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname
  }
};
````

---

- 공용
- react-router, vite, react-icons

- OTT
- 영화 및 TV,
- example) 넷플, 디즈니, 웨이브, 티빙, cgv, 메가박스 등등
- react-bootstrap, react-Query, redux,

- kakao map 활용
- mui, react-Query, zustand

- 로그인, 로그아웃
- 로컬스토리지 활용, 로그인 상태에서의 정보활용
- react-bootstrap, redux, localstorage

- 차트?
