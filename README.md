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
  - [ ] [주어진 화면](https://wiblebiz.kia.com/FAQ)을 최대한 비슷하게 제작
  - [ ] 스타일링은 전처리기(SASS) 활용
- API
  - [ ] JSON Server 사용
  - [ ] 프로젝트 내부에 목업데이터 형태로 가지고 시뮬레이션
    - 필요한 API 응답 결과는 주어진 화면 내 개발자도구(크롬 기준) > 네트워크 탭 > Fetch/XHR 에서 참고
  - [ ] Fetch 관련 오픈소스(React Query) or 네이티브 Fetch 사용

## Todo ✅

### 1. 우선순위 상 ⭐️⭐️⭐️

#### (1) 자주 묻는 질문 `/faq`
## Folder Structure 📂

```
/src
+-- app/
|   +-- components/
|   |   +-- common/
|   |   +-- faq/
|   +-- (route)/
|   |   +-- faq/
```

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
```


## Getting Started 🚀

### 1. install

```bash
git clone https://github.com/callu9/wiblebiz-demo-nextjs
npm install
```

### 2. run the development server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



### 3. start the JSON server:

```bash
json-server --watch db.json --port 3030
```
