import React, { FC } from 'react';
import SoundOn from '@indata/icon/lib/application/SoundOn';
import SoundOff from '@indata/icon/lib/application/SoundOff';
import { observer } from 'mobx-react-lite';
import { IStore } from '../../types';
import { useStores } from '../../store';
import * as SC from './styled';

const Mute: FC<IStore> = ({ store }) => {
  const {
    mediaProperties: { muted },
    updateMediaMuted,
  } = useStores(store);

  return (
    <SC.Mute onClick={() => updateMediaMuted(!muted)}>
      {!muted ? <SoundOn /> : <SoundOff />}
    </SC.Mute>
  );
};

export default observer(Mute);