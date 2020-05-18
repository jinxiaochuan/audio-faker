import React, { FC, useCallback } from 'react';
import SoundOnLine from '@indata/icon/lib/application/SoundOnLine';
import SoundClose from '@indata/icon/lib/application/SoundClose';
import { observer } from 'mobx-react-lite';
import { IStore } from '../../types';
import { useStores } from '../../store';
import * as SC from './styled';

const Mute: FC<IStore> = ({ store }) => {
  const {
    mediaProperties: { muted },
    setMuted,
  } = useStores(store);

  const handMuted = useCallback(() => {
    setMuted(!muted);
  }, [muted, setMuted]);

  return <SC.Mute onClick={handMuted}>{!muted ? <SoundOnLine /> : <SoundClose />}</SC.Mute>;
};

export default observer(Mute);
