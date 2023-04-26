# :tiger: 비동기 프로그래밍

> [학습 목표]
> 1. 비동기 프로그래밍의 개념
> 2. 비동기 프로그래밍의 필수 요소인 `Promise` 객체의 `handling 방법(예외처리 등)`에 대해 학습

<br/><br/>

## 1. 비동기 프로그래밍 개요
### 1) 개념

* 동기적, 비동기적

  * 동기적(synchronous) : 어떤 작업을 요청했을 때 그 작업이 **종료될 때 까지 기다린 후 다음 작업을 수행**하는 방식
  
    ```javascript
    const a = 1;
    const b = 2;
    console.log(`a의 값은 ${a}입니다.`);
    alert(`hello ${b}!`);
    ```
  
  * 비동기적(asynchronous) : 어떤 작업을 요청했을 때 그 작업이 **종료될 때까지 기다리지 않고 다른 작업을 하고 있다가 요청했던 작업이 종료되면 그에 대한 추가 작업을 수행**하는 방식
  ![비동기통신예시](https://bit.ly/442AnUm)

    * 예시

      * setTimeout, addEventListner 등

      * 별도의 `요청, 실행 대기, 보류`등과 관련된 코드는 모두 비동기적 코드

      * 대표적으로 서버 통신과 관련된 로직들 포함
    
    ```javascript
    setTimeout(function() {
      // 콜백함수가 console.log출력
      console.log(`Hello, World!`);
    // 1초 후 콜백 함수 실행
    }, 1000);
    // 이 과정에서 코드 실행이 멈추지 않고 다른 작업 수행 가능
    ```

<br/>

### 2) 콜백지옥
![콜백지옥예시](https://teamsparta.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F401a4e51-f709-4af9-9ecc-09d97a239c21%2FUntitled.png?id=18118d30-df93-4343-a978-e3234545613c&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=860&userId=&cache=v2)

[![드림코딩 콜백지옥](https://i1.ytimg.com/vi/s1vpVCrT8f4/sddefault.jpg)](https://youtu.be/s1vpVCrT8f4)

1. 콜백 함수를 익명 함수로 전달하는 과정이 반복되어 코드의 들여쓰기 수준이 너무 깊어진 경우

> :question: `콜백함수?` : 다른 함수의 인자로써 넘겨진 후 특정 이벤트에 의해 호출되는 함수 (== 함수에 파라미터로 들어가는 함수) <br/>
> :question: `용도?` : 순차적으로 실행하고 싶을 때 사용 <br/>
> :question: ex. setTimeout, addEventListner, ... <br/>
> [![코딩애플 콜백함수](https://i1.ytimg.com/vi/-iZlNnTGotk/sddefault.jpg)](https://youtu.be/-iZlNnTGotk)

2. 주로 이벤트 처리 및 서버 통신과 같은 비동기적 작업을 수행할 때 발생

3. 가독성이 낮고, 수정 또한 어려움

 :point_right: 이를 해결하기 위해 ES6에서 `Promise 객체`가 추가되었다!

 :point_right: 따라서 앞으로 비동기 프로그래밍을 다룬다는 것은 곧 `Promise 객체`를 다룬다는 의미와 일치하다고 봐도 무방하다.

:point_right: 또 다른 해결 방법으로는 `async-await`도 있다!

<br/><br/>

## 2. Promise 객체
### 1) 개념
* ES6에 등장한 비동기를 처리하는 Objcet로, **비동기 처리가 끝나면 알려달라는 `약속`**을 의미한다. 

* 비동기 처리 기능을 수행하고 나서 정상적으로 기능을 수행하였다면 성공 메세지와 함께 `처리된 결과값`을 전달하고, 기능 수행 중 예상치 못한 문제 발생 시 `에러`를 전달한다.

| :question: | 장/단점 |
| --- | --- |
| 장점 |  콜백함수에 비해 가독성이 좋고 비동기 처리를 동기적으로 보이게 하여 순서를 파악하기 쉽다. |
| 단점 |  콜백지옥과 같은 맥락으로 `.then()`을 연쇄적으로 호출하다보면 코드가 난잡해지거나 에러 발생 시 가독성 측면에서 몇번째 then에서 발생한 에러인지 파악이 어려울 수 있다. |

<br/>

* 예시
  * localhost 서버에서 웹페이지를 띄우다가 (제어권 : `나`) 특정 버튼 클릭 시 네이버 서버에 날씨 정보를 요청하면 (`에저권 : `네이버` ) 날씨 데이터가 들어온다. (데이터를 전달받은 뒤의 제어권 : `나`)

  * 비동기처리는 이처럼 `약속`에 의해 움직인다.

  * 이러한 `약속`과 관련된 사항이 모두 promise 객체에 담긴다.

<br/>

### 2) promise 객체에 담기는 주요한 상태 정보
1. 대기(pending)
  * 아직 성공(resolve) 또는 실패(rejecte)되지 않은 상태

2. 이행(fulfilled)
  * 데이터를 정상적으로 전달받은 상태

3. 거부(rejected)
  * 데이터를 전달받지 못한 상태로, 주로 파일을 찾을 수 없거나 네트워크 통신 문제

<br/>

### 3) promise 객체 핸들링 방법
* promise 객체가 각는 주요한 상태 정보 3가지에 따라, 적절한 처리를 해줘야 한다!

:point_right: 심화주차에서 자세히 배울 예정

1. **then ~ catch**

    ```javascript
    // http://api.naver.com/weather/today 로 요청을 한다고 가정

    axios.get('http://api.naver.com/weather/today')
    .then(response => {
      console.log('정상처리 되었습니다 : ' + response);
    })
    .catch(error => {
      console.log('오류가 발생하였습니다 : ' + error);
    })
    .finally(()=>{
      console.log('항상 실행되는 부분입니다!');
    });
    ```

2. **async / await**
  
    ```javascript
    const getWeather = async () => {
    try {
        const response = axios.get('http://api.naver.com/weather/today');
        console.log('정상처리 되었습니다 : ' + response);
      } catch (error) {
        console.log('오류가 발생하였습니다 : ' + error);
      }
    }
    ```