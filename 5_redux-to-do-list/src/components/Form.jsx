import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todos';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

function Form() {
  // useDispatch로 액션 객체 리듀서로 보내기
  const dispatch = useDispatch();

  // useState
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // 제목, 내용 onChange
  const onTitleChange = (e) => setTitle(e.target.value);
  const onBodyChange = (e) => setBody(e.target.value);

  // 추가하기 버튼 onClick
  const onAddBtnClick = (e) => {
    e.preventDefault();
    if(title === '' || body === '') {
      alert('투 두 리스트를 입력해주세요.');
      return;
    }
    const newTodo = {
      id: nanoid(),
      title,
      body,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setTitle('');
    setBody('');
  };

  return (
    <Section>
      <FormArea>
        <Label htmlFor="form-title">
          제목
          <Input 
            type="text"
            id="form-title"
            value={title}
            onChange={onTitleChange}
          />
        </Label>
        <Label htmlFor="form-body">
          내용
          <Input
            type="text"
            id="form-body"
            value={body}
            onChange={onBodyChange}
          />
        </Label>
        <FormButton
          onClick={onAddBtnClick}
        >
          추가하기
        </FormButton>
      </FormArea>
    </Section>
  )
}

export default Form

const Section = styled.section`
  height: 100px;
  display: flex;
  align-items: center;
  padding: 20px 30px;
  background-color: lightgrey;
  border-radius: 10px;
`;

const FormArea = styled.form`
  width: 100%;
`;

const Label = styled.label`
  margin-right: 5px;
`;

const Input = styled.input`
  width: 260px;
  height: 40px;
  margin: 0 20px;
  border: none;
  border-radius: 10px;
`;

const FormButton = styled.button`
  border: none;
  float: right;
  background-color: teal;
  color: white;
`;