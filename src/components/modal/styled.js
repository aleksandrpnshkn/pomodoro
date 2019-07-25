import styled from 'styled-components';
import colors from "../../theme/colors";

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    
    width: 100%;
    height: 100%;
    
    background: rgba(0, 0, 0, .1);
`;

export const ModalContainer = styled.section`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    //width: 500px;
    padding: 32px 48px;
    
    background: ${colors.appBg};
    border-radius: 3px;
    box-shadow: 0 2px 3px 0 ${colors.shadow};
`;

export const ModalHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`;
