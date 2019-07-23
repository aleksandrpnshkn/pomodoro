import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './../../theme/global-style';

import Header from './../header';
import PomodoroTimer from "../pomodoro-timer";
import colors from "../../theme/colors";

const AppComponent = styled.div`
    width: 1000px;
    margin: 0 auto;
    
    background: ${colors.appBg};
    border-radius: 3px;
    box-shadow: 0 2px 3px 0 ${colors.shadow};
`;

const App = function () {
  return(
    <>
      <GlobalStyle/>
      <AppComponent>
        <Header/>
        <PomodoroTimer/>
      </AppComponent>
    </>
  )
};

export default App;
