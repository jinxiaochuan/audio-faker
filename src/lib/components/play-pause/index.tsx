import React, { FC, useCallback } from 'react';
import Play from '@indata/icon/lib/application/Play';
import ExitPlay from '@indata/icon/lib/application/ExitPlay';
import { observer } from 'mobx-react-lite';
import { IStore } from '../../types';
import { useStores } from '../../store';
import * as SC from './styled';

const PlayPause: FC<IStore> = ({ store }) => {
  const {
    mediaProperties: { paused },
    play,
    pause,
  } = useStores(store);

  const handlePlay = useCallback(() => {
    paused ? play() : pause();
  }, [pause, paused, play]);

  return <SC.Play onClick={handlePlay}>{paused ? <Play /> : <ExitPlay />}</SC.Play>;
};

export default observer(PlayPause);
