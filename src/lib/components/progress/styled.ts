import styled from 'styled-components';

export const ProgressWrap = styled.div`
  flex: 1;
  position: relative;

  .rc-slider {
    .rc-slider-rail {
      background-color: #c1c2c3;
    }
    .rc-slider-track {
      background-color: #191919;
      z-index: 2;
    }
    .rc-slider-handle {
      background-color: #1f1f20;
      border: 2px solid #1f1f20;
      z-index: 5;
      cursor: pointer;
    }
    &:hover {
      .rc-slider-handle {
        border: 2px solid #1f1f20;
      }
    }
  }
`;
