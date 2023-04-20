import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Section>
      <span>My Todo List</span>
      <HeaderName>React</HeaderName>
    </Section>
  )
}

export default Header

const Section = styled.section`
  margin: 15px 20px;
`;

const HeaderName = styled.span`
  float: right;
`