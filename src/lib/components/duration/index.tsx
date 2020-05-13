import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { IStore } from 'lib/types';
import { useStores } from 'lib/store';

const Duration: FC<IStore> = ({ store }) => {
  const { mediaProperties } = useStores(store);
  return (
    <div>
      {mediaProperties.currentTime}
      <br />
      {mediaProperties.duration}
    </div>
  );
};

export default observer(Duration);
