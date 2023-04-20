// ! modules -> state들의 그룹!

// * 초기 상태값(state)
const initialState = {
  number: 0,
};

// action의 type을 문자열의 형태를 dispatch 안에 직접 하드코딩 또는 reducer 안에 직접 넣는 것이 아니라
// 변수 형태로 관리하는 법에 대해 배워본다.
// * Action Value : 액션을 상수로 만들기
const PLUS_ONE = 'counter/PLUS_ONE';
const MINUS_ONE = 'counter/MINUS_ONE';
const PLUS_N = 'counter/PLUS_N';
const MINUS_N = 'counter/MINUS_N';

// * Action Creator : 액션의 value를 return하는 함수
// ? export를 하는 이유 : 리듀서뿐만 아니라 컴포넌트에서도 사용하기 위해 export를 해준다.
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  }
};
export const minusOne = () => {
  return {
    type: MINUS_ONE,
  }
};
export const plusN = (payload) => {
  return {
    type: PLUS_N,
    payload,
  }
};
export const minusN = (payload) => {
  return {
    type: MINUS_N,
    payload,
  }
}

// TODO 코드가 이해 안간다고 절망하지 말고 그냥 함수구나 하고 넘길 것! 사용 방법이 더 중요함
// * 리듀서 : state를 action의 type에 따라 변경하는 함수
// input : state와 action
// 들어온 state값이 없으면 initialState를 초기값으로 지정해준다.
// action(state를 어떻게 할 것인지에 대한 표현) 객체는 타입을 가지고 있다.

// * payload
// action 객체라는 것은 action type을 payload만큼 처리하는 것이다.
// payload는 action의 목적어라고 할 수 있다.
const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ONE:
      return {
        number: state.number + 1,
      };
    case MINUS_ONE:
      return {
        number: state.number - 1,
      };
    case PLUS_N:
      return {
        number: state.number + action.payload,
      }
    case MINUS_N:
      return {
        number: state.number + action.payload,
      }
    default:
      return state;
  }
};

// * 리듀서를 바깥으로 내보내기
export default counter;