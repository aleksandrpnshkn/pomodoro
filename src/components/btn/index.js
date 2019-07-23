import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from "../../theme/colors";

const StyledButton = styled.button`
    margin: 2px;
    padding: 6px 12px;
    
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    color: inherit;
    
    background: ${colors.btn};
    border: none;
    border-radius: 3px;
    
    cursor: pointer;
    transition: background-color, color .1s;
    
    &:hover:not(:disabled),
    &:focus:not(:disabled),
    &:active:not(:disabled) {
        background: ${colors.btnActive};
    }
    
    &:disabled {
        opacity: .3;
        cursor: not-allowed;
    }
`;

const Btn = function(props) {
  const { children, ...restProps } = props;

  return (
    <StyledButton {...restProps}>
      {children}
    </StyledButton>
  );
};

Btn.defaultProps = {
  type: 'submit',
};

Btn.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
};

export default Btn;
