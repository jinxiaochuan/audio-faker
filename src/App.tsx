import React, { FC, useState, useCallback, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global-style';
import { styledComponentTheme } from './config/theme';
import Player from './lib';
import AudioStore from './lib/store/audio';
import * as SC from './styled-app';

const App: FC = () => {
  const [number, setNumber] = useState(0);
  const [src, setSrc] = useState(
    'https://byrobot-sq.oss-cn-hangzhou.aliyuncs.com/1/2020-04-30_1489/20200426170138.mp3',
  );
  const storeRef = useRef<AudioStore>();

  const handlePlay = useCallback(() => {
    if (storeRef.current) {
      storeRef.current.play();
    }
  }, []);

  const handlePause = useCallback(() => {
    if (storeRef.current) {
      storeRef.current.pause();
    }
  }, []);

  setTimeout(() => {
    setSrc('https://byrobot-sq.oss-cn-hangzhou.aliyuncs.com/1/2020-04-30_1489/20200426165810.mp3');
  }, 5000);

  return (
    <ThemeProvider theme={styledComponentTheme}>
      <SC.App>
        <SC.AppHeader>
          <Player storeRef={storeRef} src={src} />
          <button onClick={handlePlay}>播放</button>
          <button onClick={handlePause}>暂停</button>

          <Player src="https://stla-crm.indata.cc/ftp/CsPhoneCommunicate/2020/5/6/rtWcso0000000006.wav.wav.mp3" />
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
