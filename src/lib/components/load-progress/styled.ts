import styled from 'styled-components';

export const LoadProgressBar = styled.div`
  position: absolute;
  top: 5px;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: 4px;
  box-sizing: border-box;
  z-index: -1;
`;

export const LoadProgressBuffered = styled.div`
  position: absolute;
  height: 4px;
  background-color: #595959;
  border-radius: 4px;
`;
