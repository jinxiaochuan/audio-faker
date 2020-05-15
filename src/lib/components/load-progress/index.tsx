import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { IStore } from '../../types';
import { useStores } from '../../store';
import { percentify } from '../../utils';
import * as SC from './styled';

const LoadProgress: FC<IStore> = ({ store }) => {
  const {
    mediaProperties: { buffered, duration },
  } = useStores(store);

  if (!buffered || !buffered.length) {
    return null;
  }

  let bufferedEnd = buffered.end(buffered.length - 1);
  if (bufferedEnd > duration) {
    bufferedEnd = duration;
  }

  /** add child elements to represent the individual buffered time ranges */
  function renderBufferedBar() {
    let parts = [];
    for (let i = 0; i < buffered.length; i++) {
      const start = buffered.start(i);
      const end = buffered.end(i);
      /** set the percent based on the width of the progress bar (bufferedEnd) */
      const part = (
        <SC.LoadProgressBuffered
          key={`part-${i}`}
          style={{
            left: percentify(start, bufferedEnd),
            width: percentify(end - start, bufferedEnd),
          }}
        />
      );
      parts.push(part);
    }
    if (parts.length === 0) {
      parts = null;
    }
    return parts;
  }

  return <SC.LoadProgressBar>{renderBufferedBar()}</SC.LoadProgressBar>;
};

export default observer(LoadProgress);
