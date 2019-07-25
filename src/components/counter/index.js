import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CounterContainer = styled.div`
    font-size: 30px;
    font-weight: bold;
`;

const Counter = function({ completed, all, className }) {
  return (
    <CounterContainer className={className}>
      {completed + '/' + all}
    </CounterContainer>
  );
};

Counter.propTypes = {
  completed: PropTypes.number.isRequired,
  all: PropTypes.number.isRequired,
};

export default Counter;
