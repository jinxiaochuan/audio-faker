import styled from 'styled-components';

export const Play = styled.div`
  width: 32px;
  height: 32px;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  .byicon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.65);
  }
`;
