import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './../../theme/global-style';

import PomodoroTimer from "../pomodoro-timer";

const AppContainer = styled.div`
    display: flex;
    align-items: center;
    width: 1000px;
    min-height: 100vh;
    margin: 0 auto;
`;

const App = function () {
  return(
    <>
      <GlobalStyle/>
      <AppContainer>
        <PomodoroTimer/>
      </AppContainer>
    </>
  )
};

export default App;
