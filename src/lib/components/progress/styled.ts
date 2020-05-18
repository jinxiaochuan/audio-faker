import styled from 'styled-components';

export const ProgressWrap = styled.div`
  flex: 1;
  position: relative;

  .rc-slider {
    cursor: pointer;
    .rc-slider-rail {
      background-color: rgba(0, 0, 0, 0.06);
    }
    .rc-slider-track {
      background-color: rgba(0, 0, 0, 0.85);
      z-index: 2;
    }
    .rc-slider-handle {
      width: 12px;
      height: 12px;
      margin-top: -4px;
      margin-left: 0;
      background-color: rgba(0, 0, 0, 0.85);
      border: 2px solid rgba(0, 0, 0, 0.85);
      z-index: 5;
      cursor: pointer;
    }
    &:hover {
      .rc-slider-handle {
        border: 2px solid rgba(0, 0, 0, 0.85);
      }
    }
  }
`;
