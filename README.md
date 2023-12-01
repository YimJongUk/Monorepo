# MonoRepo 프로젝트

pnpm 패키지를 사용하여 MonoRepo 를 구성하고 React를 활용하여 웹사이트 제작

#

### 프로젝트 환경 설정

> #### 소스코드 내려받기

```shell
$ git clone [Repository 주소]
```

> #### 프로젝트 패키지 설치

```shell
$ npm install
```

###

##

### 프로젝트 구조 및 개발 방법

> #### 프로젝트 트리 구조

```tree
├── public
├── src
│   ├── apis
│   ├── assets
│   ├── components
│   │   └── UXcomponents
│   ├── css
│   ├── hooks
│   ├── pages
│   ├── store
│   └── utils
```

###

> #### 프로젝트 디렉토리 및 파일의 역할

| 상위 | 디렉토리 및 파일         | 역할 및 내용                                                |
| ---- | ------------------------ | ----------------------------------------------------------- |
| src/ | apis/                    | REST API 요청 소스 폴더                                     |
|      | assets/                  | 이미지, 비디오 JSON 데이터 등의 리소스 자원을 관리하는 폴더 |
|      | components/              | 프로젝트 내에서 사용하는 공용 Components 폴더               |
|      | css/                     | CSS Module 폴더                                             |
|      | hooks/                   | 공용 React Hook 폴더                                        |
|      | pages/                   | Project에서의 메뉴 및 기능별 페이지 폴더                    |
|      | store/                   | React-Redux 상태관리 소스 폴더                              |
|      | utils/                   | 공용 Utility 폴더                                           |
|      | App.js                   | 프로젝트 화면 구성 소스                                     |
|      | index.css                | 프로젝트 기초 CSS 소스                                      |
|      | index.js                 | 프로젝트 시작 소스 (React)                                  |
| /    | .eslintrc                | ESLint 설정 파일                                            |
|      | .gitignore               | Git 업로드 제외 설정 파일                                   |
|      | .prettierrc              | Prettier 설정 파일                                          |
|      | pagesge-lock.json        | 프로젝트 기본정보 및 패키지 히스토리                        |
|      | package.json             | 프로젝트 기본정보 및 패키지 최종                            |
|      | [README.md](./README.md) | 프로젝트 설명 가이드                                        |
|      | tailwind.config.js       | tailwind CSS 프레임워크 설정 파일                           |

##

### apis 디렉토리 역할

> #### apis 트리 구조

```tree
├── apis
│   ├── ApprovalApi.js
│   ├── CommonApi.js
│   ├── index.js
│   ├── RequestApi.js
│   └── StatusApi.js
```

##

> #### apis 디렉토리내 호출 함수 설명

모든 Request 함수는 index.js 의 axios 라이브러리를 통하여 호출이 이루어 지고 있다.

| 디렉토리       | 역할 및 내용                           |
| -------------- | -------------------------------------- |
| ApprovalApi.js | 결재상황 Request 함수 목록             |
| CommonApi.js   | 업무요청 Request 함수 목록             |
| index.js       | 공용 Main 함수 (axios)                 |
| RequestApi.js  | 처리상황 및 진행상황 Request 함수 목록 |
| StatusApi.js   | 업무현황 및 업무관리 Request 함수 목록 |

##
