import styled from "styled-components";
import {Field} from "formik";
import colors from "../../../theme/colors";

export const StyledField = styled(Field)`
    box-sizing: border-box;
    width: 100px;
    padding: 4px 10px;
    
    font-size: inherit;
    color: inherit;
    
    background: rgba(255, 255, 255, .8);
    border: 2px solid ${colors.field};
    border-radius: 3px;
    
    transition: border-color, background-color .1s;
    
    &:hover,
    &:focus,
    &:active {
        background: white;
        border-color: ${colors.field}
    }
`;

export const Asterisk = styled.i`
    color: tomato;
`;

export const Label = styled.label`
    width: 50%;
    margin-right: 24px;
    padding-bottom: ${(props) => (props.oneLine) ? '0' : '4px'};
    text-align: right;
    white-space: nowrap;
`;

export const FieldContainer = styled.div`
    display: ${(props) => (props.oneLine) ? 'flex' : 'block'};
    align-items: center;
`;
