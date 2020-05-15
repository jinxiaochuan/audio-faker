import React, { FC, useState, AudioHTMLAttributes } from 'react';
import NativeAudio from './components/native-audio';
import PlayPause from './components/play-pause';
import Duration from './components/duration';
import Progress from './components/progress';
import Mute from './components/mute';
import Download from './components/download';
import AudioStore from './store/audio';
import * as SC from './styled';

interface IPlayerProps extends AudioHTMLAttributes<HTMLAudioElement> {}

const Player: FC<IPlayerProps> = (props) => {
  /** 重点：每个音频实例都必须独有一个store */
  const [audioStore] = useState(new AudioStore());

  return (
    <>
      <NativeAudio store={audioStore} {...props} />
      <SC.Player>
        <PlayPause store={audioStore} />
        <Duration store={audioStore} />
        <Progress store={audioStore} />
        <Mute store={audioStore} />
        <Download store={audioStore} />
      </SC.Player>
    </>
  );
};

export default Player;
