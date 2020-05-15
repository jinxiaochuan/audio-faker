import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { IStore } from '../../types';
import { useStores } from '../../store';
import { formatTime } from '../../utils';
import * as SC from './styled';

const Duration: FC<IStore> = ({ store }) => {
  const {
    seekingTime,
    userActivity,
    mediaProperties: { currentTime, duration },
  } = useStores(store);
  const current = userActivity ? seekingTime : currentTime;

  return (
    <SC.TimeWrap>
      {formatTime(current, duration)}
      <SC.TimeSplit>/</SC.TimeSplit>
      {formatTime(duration, duration)}
    </SC.TimeWrap>
  );
};

export default observer(Duration);
