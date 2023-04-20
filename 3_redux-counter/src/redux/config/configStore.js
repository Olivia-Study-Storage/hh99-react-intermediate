// 중앙 데이터 관리소(store)를 설정하는 부분
import { createStore, combineReducers } from 'redux';
import counter from '../modules/counter';

// ! redux 설치/셋팅 방법에 대해서는 이해할 필요 전혀 X
// ! 그냥 설정되는대로 사용하면 된다

// * createStore()
// 리덕스의 가장 핵심이 되는 스토어를 만드는 메서드(함수)이다.
// 리덕스는 단일 스토어로 모든 상태 트리를 관리하기 때문에
// 리덕스를 사용할 경우 createStore를 호출할 일은 한 번밖에 없다.
// createStore()로 store를 생성하서 store라는 변수 안에 넣는다.
// createStore의 인자는 reducer의 묶음들이 들어가야 한다. 즉, rootReducer!

// * combineReducers()
// 리덕스는 action -> dispatch -> reducer 순으로 동작한다.
// 이때 애플리케이션이 복잡해지면 reducer부분을 여러 개로 나눠야 하는 경우가 있다.
// combineReducers는 여러개의 독립적인 reducer의 반환 값을 하나의 상태 객체로 만들어준다.
// 즉, reducer들을 하나로 모아서 한 개로 만들어 놓은 기본 reducer
// 따라서 combineReducers의 인자는 객체 형태로 들어간다.
const rootReducer = combineReducers({
  // key-value 값이 같으므로 생략해서 하나로 표현
  counter,
});
const store = createStore(rootReducer);

// 이렇게 만든 우리의 store를 애플리케이션에 주입해주는 과정(index.js에 작성)이 필요하다.
// 따라서 바깥으로 내보내기 위해 export를 사용한다.
export default store;