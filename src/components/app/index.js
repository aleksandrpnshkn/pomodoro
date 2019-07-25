import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './../../theme/global-style';

import Header from './../header';
import PomodoroTimer from "../pomodoro-timer";
import colors from "../../theme/colors";

const AppContainer = styled.div`
    width: 1000px;
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
