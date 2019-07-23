import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    padding: 10px;
    text-align: center;
`;

const Header = function() {
  return (
    <HeaderContainer>
      <h1>Pomodoro Timer</h1>
    </HeaderContainer>
  );
};

export default Header;
