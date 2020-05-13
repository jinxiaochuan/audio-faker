import React, { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global-style';
import { styledComponentTheme } from 'config/theme';
import logo from './logo.svg';
import * as SC from './styled-app';

const App: FC = () => {
  const [number, setNumber] = useState(0);

  return (
    <ThemeProvider theme={styledComponentTheme}>
      <SC.App>
        <SC.AppHeader>
          <SC.AppLogo src={logo} alt="logo" />
          <SC.AppDesc>
            Edit <code>src/App.tsx</code> and save to reload.
          </SC.AppDesc>
          <SC.AppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </SC.AppLink>
          <SC.AppIntro>The current value of number is {number}</SC.AppIntro>
          <SC.AppButton onClick={() => setNumber(number + 1)}>+</SC.AppButton>
        </SC.AppHeader>
      </SC.App>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
