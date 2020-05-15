import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { IStore } from '../../types';
import { useStores } from '../../store';
import { formatTime } from '../../utils';
import * as SC from './styled';

const Duration: FC<IStore> = ({ store }) => {
  const {
    mediaProperties: { currentTime, duration },
  } = useStores(store);

  return (
    <SC.TimeWrap>
      {formatTime(currentTime, duration)}
      <SC.TimeSplit>/</SC.TimeSplit>
      {formatTime(duration, duration)}
    </SC.TimeWrap>
  );
};

export default observer(Duration);
