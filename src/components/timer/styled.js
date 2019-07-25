import styled from 'styled-components';

import Dial from "../dial";
import Btn from "../btn";

const TimerDial = styled(Dial)`
    margin-bottom: 24px;
`;

const TimerControls = styled.div`
    display: flex;
    justify-content: center;
`;

const TimerBtn = styled(Btn)`
    
`;

export {
  TimerControls,
  TimerDial,
  TimerBtn
}
