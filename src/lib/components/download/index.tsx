import React, { FC, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import download from 'downloadjs';
import debounce from 'lodash/debounce';
import DownloadLine from '@indata/icon/lib/application/DownloadLine';
import { IStore } from '../../types';
import { useStores } from '../../store';
import * as SC from './styled';

const Download: FC<IStore> = ({ store }) => {
  const {
    mediaProperties: { currentSrc },
  } = useStores(store);

  const handleDownload = useCallback(() => {
    download(currentSrc);
  }, [currentSrc]);

  return (
    <SC.Download onClick={debounce(handleDownload, 350)}>
      <DownloadLine />
    </SC.Download>
  );
};

export default observer(Download);
