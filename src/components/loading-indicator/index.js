// loading.io

import React from 'react';
import styled, { keyframes } from 'styled-components';

const ldsFacebook1 = keyframes`
  0 % {
    top: 36px;
    height: 128px;
  }
  50% {
    top: 60px;
    height: 80px;
  }
  100% {
    top: 60px;
    height: 80px;
  }
`;

const ldsFacebook2 = keyframes`
  0 % {
    top: 41.99999999999999px;
    height: 116.00000000000001px;
  }
  50% {
    top: 60px;
    height: 80px;
  }
  100% {
    top: 60px;
    height: 80px;
  }
`;

const ldsFacebook3 = keyframes`
  0 % {
    top: 48px;
    height: 104px;
  }
  50% {
    top: 60px;
    height: 80px;
  }
  100% {
    top: 60px;
    height: 80px;
  }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height};
`;

const LdsFacebook = styled.div`
  position: relative;
  transform: translate(-36px, -36px) scale(0.36) translate(36px, 36px);
  
  width: 72px !important;
  height: 72px !important;
  
  & div {
    position: absolute;
    width: 30px;
  }
  
  & div:nth-child(1) {
    left: 35px;
    background: #263238;
    animation: ${ldsFacebook1} 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    animation-delay: -0.2s;
  }
  
  & div:nth-child(2) {
    left: 85px;
    background: #546e7a;
    animation: ${ldsFacebook2} 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    animation-delay: -0.1s;
  }
  
  & div:nth-child(3) {
    left: 135px;
    background: #90A4AE;
    animation: ${ldsFacebook3} 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
`;

const Spinner = function({ height }) {
  height = height || '100%';

  return (
    <SpinnerWrapper height={height}>
      <LdsFacebook>
        <div></div>
        <div></div>
        <div></div>
      </LdsFacebook>
    </SpinnerWrapper>
  );
};

export default Spinner;
