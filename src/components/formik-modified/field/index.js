import React from 'react';
import PropTypes from 'prop-types';

import { FieldContainer, Label, StyledField, Asterisk } from './styled';

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
