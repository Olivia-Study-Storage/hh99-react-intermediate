# <b>Redux, Router로 To Do List 만들기</b>
<div align="center">

![todolist testing](https://blog.kakaocdn.net/dn/cDXcEH/btscwLwH8RG/a7V4wgz2aIZLdhldHaJ5FK/img.gif)

</div>

<br/><br/>

# :dart: 요구사항
<div align="center">

![requirement](./img/requirement.gif)

</div>

* 구현해야 할 기능
  - Create Todo
  - Read Todos, Todo
  - Update Todo
  - Delete Todo
  
* todos 데이터는 `리덕스`를 사용해 전역으로 상태 관리 (`Ducks 패턴` 사용)

* 메인 페이지 구성은 입문주차의 요구사항과 동일하나, input에 값이 있는 상태에서 상세 페이지로 이동하는 경우 input의 value 초기화
  
* 상세 페이지의 디자인과 화면 구성은 자유롭게 구성하되, 아래 요소들은 보여야 함
  - Todo의 ID
  - Todo의 제목
  - Todo의 내용
  - 이전으로 버튼 : 클릭 시 리스트 화면으로 되돌아 감

* map 사용 시 반드시 `key`를 넣어야 하며, map의 index 사용 금지

* Todo의 id 생성 시 todos.length를 사용해 생성하면 안됨

<br/><br/>

# :open_file_folder: 컴포넌트 분리 구조
```bash
📦src
 ┣ 📂components
 ┃ ┗ 📜Main.jsx           : 메인 페이지
 ┃ ┣ 📜Header.jsx         : 헤더 컴포넌트
 ┃ ┣ 📜Form.jsx           : todo를 입력하는 Form 섹션 컴포넌트
 ┃ ┣ 📜ListWorking.jsx    : Working 섹션 컴포넌트
 ┃ ┣ 📜ListDone.jsx       : Done 섹션 컴포넌트
 ┃ ┣ 📜ListMap.jsx        : Working, Done을 처리하고 박스를 보여주는 컴포넌트
 ┃ ┣ 📜DetailPage.jsx     : 상세페이지 컴포넌트
 ┃ ┣ 📜GlobalStyle.jsx    : styled-Components 글로벌 스타일 분류
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜configStore.js
 ┃ ┗ 📂modules
 ┃ ┃ ┗ 📜todos.js
 ┣ 📂shared
 ┃ ┗ 📜Router.js
 ┣ 📜App.jsx              : App.jsx → Main.jsx로 라우터 처리
 ┣ 📜index.js
 ┗ 📜reportWebVitals.js
```

<br/><br/>

# :pencil2: 간단한 회고 및 정리
<div align="center">

[![blog link](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FwVhpi%2FbtscwLcxy8u%2FqMauiaY8DXqKXxehamwZR1%2Fimg.png)](https://oliviakim.tistory.com/86)

</div>

(_이미지 클릭 시 블로그로 이동합니다._)