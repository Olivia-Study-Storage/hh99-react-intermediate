# :cat: REST(Path Variable vs Query Parameter)

> [학습 목표]
> 1. REST의 개념
> 2. RESTful한 통신 방법에 대한 이해
> 3. Query Parameter, Query String, Path Variable의 표현적 차이점과 장단점 파악

<br/><br/>

## 1. REST API란?
### 1) 개념
* `REpresentational State Transfer`의 약자로서, 어떤 자원에 대해 CRUD를 진행할 수 있게 `HTTP Method` (GET, POST, PUT, DELETE)를 사용하여 요청을 보내는 것

* 이때, 요청을 위한 `자원`은 특정한 형태로 `표현`된다.

:point_right: URI를 통해 정보의 자원(만)을 표현하고, 자원의 행위는 HTTP Method로 명시한다.

  * 자원(Resource) : URI

  * 행위(Verb) : HTTP Method

  * 표현(Representations)
  
    ```javascript
    // user 중에서 3번 아이디를 가지고 있는 사람들의 프로필을 달라는 요청!
    GET/users/3/profile
    ```

<br/>

### 2) 예시
* 예시
  ```javascript
  // bad
  GET /members/delete/1
  // good
  DELETE /members/1

  // bad
  GET /members/show/1
  // good
  GET /members/1

  // bad
  GET /members/insert/2
  // good
  POST /members/2
  ```

* 규칙 살펴보기
  ```text
  http://example.com/posts     (O)
  http://example.com/posts/    (X)
  http://example.com/post      (X)
  http://example.com/get-posts (X)
  --> URI는 명사를 사용하고 소문자로 작성되어야 한다.
  --> 명사는 복수형을 사용한다.
  --> URI의 마지막에는 /를 포함하지 않는다.

  http://example.com/post-list  (O)
  http://example.com/post_list  (X)
  --> URI에는 언더바가 아닌 하이픈을 사용한다.

  http://example.com/post/assets/example      (O)
  http://example.com/post/assets/example.png  (X)
  --> URI에는 파일의 확장자를 표시하지 않는다.
  ```

<br/>

### 3) RESTful하다는 것의 의미는?
* REST API의 설계 의도를 명확하게 지킴으로써, 각 구성 요소들의 역할이 확실하게 분리되어있어 URI만 보더라도 리소스를 명확하게 인식할 수 있도록 표현한 설계 방식을 의미한다.

[![얄코 RESTAPI](https://i1.ytimg.com/vi/iOueE9AXDQQ/sddefault.jpg)](https://youtu.be/iOueE9AXDQQ)

<br/>

### 4) RESTful하지 못한 상황의 예시
* CRUD의 기능을 모두 POST method로만 사용하는 경우

* URI에 행위(method)에 대한 부분이 들어가는 경우 (/classes/createPeople)

> `URI와 URL` <br/>
> :question: URI(Uniform Resource Identifier) : 자원의 위치 뿐만 아니라 자원에 대한 고유 식별자로서 URL의 의미를 포함 <br/>
> :question: URL(Uniform Resource Locator) : 자원이 실제로 존재하는 위치 <br/>
> :heavy_exclamation_mark: URI는 `식별`하고, URL은 `위치`를 가리킨다.

<br/>

---

<br/>

## 2. Path Variable vs Query Parameter
### 1) Path Variable

| `/user/10`

* 특징
  * 이름에서도 유추할 수 있듯, 경로 자체에 `변수`(10)를 사용한 방법이다.
  * 전체 데이터 또는 특정 하나의 데이터를 다룰 때처럼, `리소스를 식별`하기 위해 사용한다.

<br/>

### 3) Query Parameter

| `/users?user_id=10`

* 특징
  * 데이터를 정렬하거나 필터링하는 경우 더 적합하다.

<br/>

### 4) 예시를 통해 비교해보기

```bash
# Fetch a list of users
/users

# Fetch a list of programer user
/users?occupation=programer

# Fetch a user who has id 123
/users/123
```