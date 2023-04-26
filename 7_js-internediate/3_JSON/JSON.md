# :dragon: JSON이란?

> [학습 목표]
> 1. JSON에 대한 기초 개념
> 2. JSON 관련 메서드 학습
> 3. NoSQL 데이터 설계를 위한 기초 지식

<br/><br/>

# 1. JSON이란?
### 1) 개념
* JavaScript Object Notation으로, 자바스크립트 객체 문법에 토대를 둔 문자 기반의 `데이터 교환 형식`

<br/>

### 2) 구조
* 일반적인 JSON 구조는 자바스크립트 객체 리터럴 작성법을 따른다.

* 자바스크립트의 `원시 자료형`인 문자열, 숫자, 불리언을 가질 수 있고 `중첩된 계층 구조`또한 가질 수 있다.

* 다만 자바스크립트 객체 형태와 `완전히 같지는 않다.` 또한 작은 따옴표 `''`가 아닌 끝 따옴표 `""`만 허용된다.

```JSON
{
  "squadName": "Super hero squad",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Teleportation",
      ]
    }
  ]
}
```

<br/>

### 3) 메서드
* JSON -> 문자열 형태 -> `서버-클라이언트 간 데이터 전송` 시 사용한다.


* 하지만, 다음의 두 경우를 위해 파싱(parsing) 과정이 필요하다.
  * JS 객체를 JSON 형태로 전송
  
  * JSON 형태를 JS 객체 형태로 사용


<br/>

> :question: JSON 문자열? <br/>
> * 데이터를 교환하기 위한 표준 형식 중 하나로, 텍스트 기반 형식의 데이터 교환 방식이다. <br/><br/>
> * 서버에서 데이터를 전송할 때 JSON 형식으로 이루어진 문자열을 사용하면 다양한 언어 및 플랫폼에서 호환성이 좋아지며, 서로 다른 시스템간의 데이터 교환을 보다 간편하게 할 수 있다. <br/><br/>

<br/>

> :question: 서버에서 데이터를 받을 때 JSON 형식으로 이루어진 문자열만 읽을 수 있는지?
> * 서버와 클라이언트 간 데이터 교환을 위해 일반적으로 사용되는 데이터 형식 중 하나일 뿐, 개발자나 기술 스택에 따라 선택은 다를 수 있다.<br/><br/>
> * 서버와 클라이언트 모두에서 JSON 형식을 처리할 수 있는 라이브러리나 모듈을 사용해 데이터를 변환하고 처리할 수 있다.

<br/>

* `stringify()` 
  * 자바스크립트 객체 -> `JSON 문자열` 변환

  * 네트워크를 통해 객체를 JSON 문자열로 변환할 때 주로 사용한다.

  ```javascript
  const person = {
    name: "Alice",
    age: 25,
    isStudent: true,
    courses: ["Math", "Science", "History"],
    address: {
      city: "New York",
      state: "NY"
    }
  };

  const jsonString = JSON.stringify(person);
  console.log(jsonString);
  // 출력 결과: {"name":"Alice","age":25,"isStudent":true,"courses":["Math","Science","History"],"address":{"city":"New York","state":"NY"}}
  ```


* `parse()`
  * JSON 문자열 -> `자바스크립트 객체` 변환
  
  * 네트워크 통신의 결과를 통해 받아온 JSON 문자열을 프로그램 내부에서 사용하기 위해 JS 객체로 변환할 때 사용한다.

  ```javascript
  const jsonString = '{"name":"Alice","age":25,"isStudent":true,"courses":["Math","Science","History"],"address":{"city":"New York","state":"NY"}}';

  const person = JSON.parse(jsonString);
  console.log(person);
  // 출력 결과: { name: 'Alice', age: 25, isStudent: true, courses: [ 'Math', 'Science', 'History' ], address: { city: 'New York', state: 'NY' } }
  ```

<br/>

### 4) JSONPlaceholder
![JSONPlaceholder](https://bit.ly/3AszDdK)
* 가짜 서버! (= mock API server)

* 아래의 API를 통해 JSON 기반 DB 통신을 진행할 수 있다.

<br/>

> :question: mock API server는 데이터 통신 학습을 위한건지 아니면 실제 서비스에서도 사용하는지? <br/>
> * 주로 데이터 통신 학습을 위해 사용되지만 실제 서비스에서도 가끔 사용하긴 한다. <br/>
> * 개발자가 프로토타입을 만들거나 기능 구현 전 API 응답을 테스트할 때 사용한다. <br/>
> * 또한 다양한 상황에서의 데이터 요청 및 응답 시뮬레이션에도 사용한다.

<br/>

  ```javascript
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json));
  ```

* 예시
  * App.jsx
    ```jsx
    import "./App.css";
    import { useEffect, useState } from "react";

    function App() {
      const [data, setData] = useState([]);

      useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
            console.log();
            console.log("response.json()", response);
            return response.json();
          })
          .then((json) => {
            console.log("json", json);
            setData([...json]);
          });
      }, []);

      return (
        <div>
          {data.map((item) => {
            return (
              <div
                style={{
                  border: "1px solid black",
                  margin: "3px",
                }}
                key={item.id}
              >
                <ul>
                  <li>userId : {item.userId}</li>
                  <li>id : {item.id}</li>
                  <li>title : {item.title}</li>
                  <li>body : {item.body}</li>
                </ul>
              </div>
            );
          })}
        </div>
      );
    }

    export default App;
    ```

  * 결과값
    ![결과값](https://teamsparta.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9a05686f-369a-4c17-8578-b6fed8b09cdf%2FUntitled.png?id=9d8dd0d2-cc24-4fa1-9772-bfcb570d8f33&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1060&userId=&cache=v2)