import styled, { keyframes } from 'styled-components';

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const App = styled.div`
  text-align: center;
`;

export const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${appLogoSpin} infinite 20s linear;
  }
`;

export const AppDesc = styled.p`
  font-size: 18px;
`;

export const AppLink = styled.a`
  color: #61dafb;
`;

export const AppIntro = styled.p`
  font-size: 14px;
`;

export const AppButton = styled.button`
  color: blue;
  font-size: 12px;
`;
