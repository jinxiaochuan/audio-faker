import React, { FC, useState, AudioHTMLAttributes } from 'react';
import NativeAudio from './components/native-audio';
import Duration from './components/duration';
import AudioStore from './store/audio';

interface IPlayerProps extends AudioHTMLAttributes<HTMLAudioElement> {}

const Player: FC<IPlayerProps> = (props) => {
  /** 重点：每个音频实例都必须独有一个store */
  const [audioStore] = useState(new AudioStore());

  return (
    <>
      <NativeAudio store={audioStore} {...props} />
      <Duration store={audioStore} />
    </>
  );
};

export default Player;
