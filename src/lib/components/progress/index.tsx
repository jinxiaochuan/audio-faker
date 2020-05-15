import React, { FC, useState, useCallback, useEffect } from 'react';
import Slider from 'rc-slider';
import throttle from 'lodash/throttle';
import { observer } from 'mobx-react-lite';
import LoadProgress from '../load-progress';
import { IStore } from '../../types';
import { useStores } from '../../store';
import * as SC from './styled';
import 'rc-slider/dist/rc-slider.min.css';

const Progress: FC<IStore> = ({ store }) => {
  const { mediaProperties, seekingTime, userActivity, setSeekingTime, setUserActivity } = useStores(
    store,
  );
  const [time, setTime] = useState(0);

  const getTime = useCallback(() => {
    const { currentTime, duration } = mediaProperties;
    /**
     * 获取当前音频/视频进度
     * 注意：1 - 当拖动进度条时的修改进度 当拖动至最左侧时造成seekingTime为0（此时 time 变为 currentTime），还未松手时，导致进度条突变至当前播放的位置(解决方法：增加 userActivity 字段进行判断)
     *      2 - 正常播放时的进度
     */
    const time = userActivity ? seekingTime : currentTime;
    const percent = time / duration;
    if (Number.isNaN(percent)) {
      return 0;
    }
    return Number((percent >= 1 ? 1 : percent) * 100);
  }, [mediaProperties, seekingTime, userActivity]);

  const getSeekingTime = useCallback(
    (value: number) => {
      const { duration } = mediaProperties;
      /** 当 duration 为 Infinity 或 0 时*/
      if (Number.isNaN(duration) || duration === Infinity || duration === 0) {
        return 0;
      }
      const newTime = (value / 100) * duration;
      /** 防止直接拖动进度条到结束时视频直接停止，使得时间减少0.01s */
      return newTime === duration ? newTime - 0.01 : newTime;
    },
    [mediaProperties],
  );

  const handleChange = useCallback(
    (value: number) => {
      setTime(value);
      setUserActivity(true);
      setSeekingTime(getSeekingTime(value));
    },
    [getSeekingTime, setSeekingTime, setUserActivity],
  );

  const handleAfterChange = useCallback(
    (value: number) => {
      setTime(value);
      setUserActivity(false);
      setSeekingTime(getSeekingTime(value), true);
    },
    [getSeekingTime, setSeekingTime, setUserActivity],
  );

  useEffect(() => {
    setTime(getTime());
  }, [getTime]);

  console.log(time);

  return (
    <SC.ProgressWrap>
      <Slider
        tipFormatter={null}
        value={time}
        onChange={throttle(handleChange, 350)}
        onAfterChange={handleAfterChange}
      />
      <LoadProgress store={store} />
    </SC.ProgressWrap>
  );
};

export default observer(Progress);
