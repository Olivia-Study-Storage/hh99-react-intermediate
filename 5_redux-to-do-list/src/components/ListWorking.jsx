import React from 'react';
import { useSelector } from 'react-redux';
import ListMap from './ListMap';
import styled from 'styled-components';

function ListWorking() {
  // useSelector로 store에서 전역 state 가져오기
  const todos = useSelector((state) => state.todos);

  return (
    <section>
      <h1>🔥Working🔥</h1>
      <ListArea>
      {
        todos
        .filter((todos) => !todos.isDone)
        .map((item) => <ListMap key={item.id} item={item} />)
      }
      </ListArea>
    </section>
  )
}

export default ListWorking

const ListArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;