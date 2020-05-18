import styled from 'styled-components';

export const ProgressWrap = styled.div`
  flex: 1;
  position: relative;

  .rc-slider {
    cursor: pointer;
    .rc-slider-rail {
      background-color: rgba(210, 210, 217, 1);
    }
    .rc-slider-track {
      background-color: rgba(0, 0, 0, 0.9);
      z-index: 2;
    }
    .rc-slider-handle {
      background-color: rgba(0, 0, 0, 0.9);
      border: 2px solid rgba(0, 0, 0, 0.9);
      z-index: 5;
      cursor: pointer;
    }
    &:hover {
      .rc-slider-handle {
        border: 2px solid rgba(0, 0, 0, 0.9);
      }
    }
  }
`;
