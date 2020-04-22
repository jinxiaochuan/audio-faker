import React, { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { styledComponentTheme } from 'config/theme';
import logo from './logo.svg';
import './App.css';

const App: FC = () => {
  const [number, setNumber] = useState(0);

  return (
    <ThemeProvider theme={styledComponentTheme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p className="App-intro">The current value of number is {number}</p>
          <button onClick={() => setNumber(number + 1)}>+</button>
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;
