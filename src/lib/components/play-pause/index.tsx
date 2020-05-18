import React, { FC, useCallback } from 'react';
import SolidPlay from '@indata/icon/lib/application/SolidPlay';
import ExitPlayLine from '@indata/icon/lib/application/ExitPlayLine';
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
    if (paused) {
      play();
    } else {
      pause();
    }
  }, [pause, paused, play]);

  return <SC.Play onClick={handlePlay}>{paused ? <SolidPlay /> : <ExitPlayLine />}</SC.Play>;
};

export default observer(PlayPause);
