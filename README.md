# Kia Wiblebiz Demo Project with Next.js

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

```bash
npx create-next-app@latest (project name)
# or
pnpm create next-app (project name)
```

## Goals 💡

- 개발 환경
  - [x] Vite 활용해서 직접 구성 or Next.js 세팅하여 진행
- 구현
  - [x] [주어진 화면](https://wiblebiz.kia.com/FAQ)을 최대한 비슷하게 제작
  - [x] 스타일링은 전처리기(SASS) 활용
  - [ ] 애니메이션 구현
- API
  - [x] 프로젝트 내부에 목업데이터 형태로 가지고 시뮬레이션
    - 필요한 API 응답 결과는 주어진 화면 내 개발자도구(크롬 기준) > 네트워크 탭 > Fetch/XHR 에서 참고

## Todo ✅

### 1. 우선순위 상 ⭐️⭐️⭐️

#### (1) 자주 묻는 질문 `/faq`
  - 목록 조회
    - [x] 탭
    - [x] 토글
    - [x] 페이지네이션
    - [x] 필터링 구현 (검색어 입력 및 초기화)
  - 상세 조회
    - [x] 아코디언 구현
    - [ ] 애니메이션 구현
  - 기타
    - [x] SEO 적용
    - [x] 서비스 문의: `/counsel` 페이지 이동
    - [x] 파일 다운로드
    - [x] 이용 프로세스 안내
    - [x] 앱 다운로드 안내


### 2. 우선순위 중 ⭐️⭐️

#### (1) 상담 문의 `/counsel`
  - [ ] 입력 및 초기화
  - [x] 버튼 비활성화 로직 구성
  - [x] 제출 및 에러 팝업 구성

## TIL 📑
  - `generateMetadata`: page props에 따른 dynamic metadata 생성을 위해 사용
```
1) export async function generateMetadata(params, searchParams, parent) {}

  - params: 페이지의 동적 경로 매개변수
  - searchParams: 페이지의 동적 쿼리 매개변수
  - parent: 상위 메타데이터

이 함수는 페이지가 렌더링 될 때마다 호출되며, 페이지의 메타데이터를 동적으로 생성할 수 있습니다.
```

  - route handler: 특정 경로에 대한 사용자 정의 요청 처리기를 생성하기 위해 사용
```
2) route handler
/(...api path...)/route.js 파일에서 HTTP 메서드를 처리하는 서버 측 로직 생성

  2-1) 라우트 핸들러(route handler)란?
  라우트 핸들러는 Next.js에서 제공하는 기능으로 특정 경로에 대한 사용자 정의 요청 처리기를 생성할 수 있다.
  API 라우트와 유사한 역할을 하지만, pages 디렉토리가 아닌 app 디렉토리에서 작동하는 것이 특징입니다.

  2-2) 필요성
  - 통합된 경로 관리: route.js 파일을 사용하여 각 경로에 대한 로직을 중앙에서 관리할 수 있으며,
    API 라우트처럼 HTTP 메서드(GET, POST 등)를 직접 처리할 수 있습니다.
  - 성능 최적화: 캐싱과 같은 기능을 이용하여 네트워크 요청의 부하를 줄이고, 응답 속도를 개선할 수 있습니다.
  - 보안 강화: 입력 검증, 인증과 같은 보안 관련 처리를 라우트 핸들러에서 수행함으로써 보안을 강화할 수 있습니다.
  - 유연한 응답 구성: 다양한 HTTP 상태 코드와 헤더를 설정하여, 요청에 따른 정교한 응답을 구성할 수 있습니다.

라우트 핸들러는 Next.js 애플리케이션에서 백엔드 로직을 효율적으로 관리하고 최적화할 수 있도록 합니다.
```


## Folder Structure 📂

```
/src
+-- app/
|   +-- api/
|   +-- components/
|   |   +-- common/
|   |   +-- faq/
|   +-- (route)/
|   |   +-- faq/
|   +-- styles/
+-- mocks/
|   +-- db.json
```

- `(route)/`: set `page.js` file to route pages as file path
- `styles/`: common style sheet and variables
- `api/`: set `route.js` file to define api
- `mocks/`: set data json file


## Convention

### 1) Naming Conventions 📝

- file, page, component name: PascalCase
- folder name, route path: nocase
- variable, function: camelCase
- constant variable: SCREAMING_SNAKE_CASE
- html tag properties (ex. className, id etc.): skewer-case

#### ❗️주의 
  - 화면 파일명이 길어지는 경우 최대 35자, 영단어 5개까지로 제한.
  - 상세조회 화면 파일은 Detail, 신규등록/수정 화면 파일은 Form으로 끝나는 이름으로 사용.

#### 📚 참고 
[**Airbnb JavaScript Style Guide**](https://github.com/airbnb/javascript)

```
1. Avoid single letter names. Be descriptive with your naming.
  1-1. Also, Avoid Mental Mapping.

2. Use camelCase when naming objects, functions, and instances.

3. Use PascalCase only when naming constructors or classes. (also file name)

...
```

### 2) Commit Messages 💬

|태그|설명|
|---|----|
|`feat: `|기능 추가|
|`fix: `|버그를 고친 경우 🛠|
|`refactor: `|프로덕션 코드 리팩토링 |
|`comment: `|필요한 주석 추가 및 변경 💬|
|`chore: `|빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X) ⚙️|
|`docs: `|문서를 수정한 경우 📝|
|`style: `|CSS 등 사용자 UI 디자인 변경 🎨|
|`rename: `|파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 ✍️|
|`remove: `|파일을 삭제하는 작업만 수행한 경우 🗑️|



## Getting Started 🚀

### 1. install

```bash
git clone https://github.com/callu9/wiblebiz-demo-nextjs
npm install
```

### 2. run the development server

```bash
npm run dev
```

Open http://localhost:3000 to browse the results.
