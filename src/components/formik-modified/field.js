import React from 'react';
import styled from 'styled-components';
import { Field } from 'formik';
import PropTypes from 'prop-types';

import colors from './../../theme/colors';

const StyledField = styled(Field)`
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

const Asterisk = styled.i`
    color: tomato;
`;

const Label = styled.label`
    width: 50%;
    margin-right: 24px;
    padding-bottom: ${(props) => (props.oneLine) ? '0' : '4px'};
    text-align: right;
    white-space: nowrap;
`;

const FieldContainer = styled.div`
    display: ${(props) => (props.oneLine) ? 'flex' : 'block'};
    align-items: center;
`;

const CustomField = function(props) {
  const { label,  oneLine, ...formikProps } = props;
  const { name, children, required } = formikProps;
  const id = 'formik-' + name;

  const asterisk = (required) ? <Asterisk>*</Asterisk> : null;
  return (
    <FieldContainer oneLine={oneLine}>
      <Label htmlFor={id}>
        {`${label}:`}
        {asterisk}
      </Label>
      <StyledField id={id} {...formikProps} >
        {children}
      </StyledField>
    </FieldContainer>
  );
};

CustomField.defaultTypes = {
  oneLine: false,
  required: false,
};

CustomField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  oneLine: PropTypes.bool,
  required: PropTypes.bool,
};

export default CustomField;
