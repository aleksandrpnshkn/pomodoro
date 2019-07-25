import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DialContainer = styled.div`
    font-size: 96px;
    font-weight: bold;
    text-align: center;
`;

/**
 * Convert a number to a string of a certain length.
 * If number is longer than given length param, then returns w/o changes.
 * @param {!number} num
 * @param {!number} length - Length of string
 * @returns {string|undefined}
 */
const convertNumToStr = function(num, length) {
  if (!num && num !== 0) return;
  return num.toString().padStart(length, '0');
};

const Dial = function({ timeData, className }) {
  for (let timeUnit in timeData) {
    const value = timeData[timeUnit];
    timeData[timeUnit] = convertNumToStr(value, 2);
  }

  let { hours, minutes, seconds } = timeData;

  hours = (hours) ? <span>{hours}:</span> : null;
  minutes = (minutes) ? <span>{minutes}:</span> : null;
  seconds = (seconds) ? <span>{seconds}</span> : null;

  return (
    <DialContainer className={className}>
      {hours}
      {minutes}
      {seconds}
    </DialContainer>
  );
};

Dial.defaultProps = {
  timeData: PropTypes.shape({
    seconds: PropTypes.number,
    minutes: PropTypes.number,
    hours: PropTypes.number,
  }),
};

export default Dial;
