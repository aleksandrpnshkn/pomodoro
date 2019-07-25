import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

import { Field } from './../formik-modified';
import Btn from "../btn";

const OptionsFormik = styled(Formik)`
    
`;

const Options = function(props) {
  const { refreshOptions, initialValues, closeModalHandler } = props;

  return (
    <Formik initialValues={initialValues}
            enableReinitialize
            onSubmit={(values) => {
              closeModalHandler();
              refreshOptions(values);
            }} >
      <Form>
        <Field label={'Work'} name={'duration.work'} type={'number'}
               min={1} max={99} oneLine required />
        <Field label={'Short Break'} name={'duration.shortBreak'} type={'number'}
               min={1} max={59} oneLine required />
        <Field label={'Long Break'} name={'duration.longBreak'} type={'number'}
               min={1} max={59} oneLine required />

        <Btn>
          <i className="fas fa-check"></i>
          <span className="visuallyhidden">Save</span>
        </Btn>
      </Form>
    </Formik>
  );
};

Options.propTypes = {
  refreshOptions: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  closeModalHandler: PropTypes.func,
};

export default Options;
