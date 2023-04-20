// 중앙 데이터 관리소(store)를 설정하는 부분
import { createStore, combineReducers } from 'redux';
import todos from '../modules/todos';

const rootReducer = combineReducers({
  todos,
});
const store = createStore(rootReducer);

export default store;