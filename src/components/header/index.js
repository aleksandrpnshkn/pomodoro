import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    margin-bottom: 20px;
    padding: 10px;
    text-align: center;
`;

const HeaderTitle = styled.h1`
    margin: 0;
`;

const Header = function() {
  return (
    <HeaderContainer>
      <HeaderTitle>Pomodoro Timer</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
