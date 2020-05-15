import React, { FC, AudioHTMLAttributes, useRef, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import AudioStore from '../../store/audio';
import { useStores } from '../../store';

export interface IAudioProps extends AudioHTMLAttributes<HTMLAudioElement> {
  store: AudioStore;
}

const NativeAudio: FC<IAudioProps> = (props) => {
  const { store, ...audioProps } = props;
  const { handleNativeEvent } = useStores(store);
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    store.setAudioRef(audioRef);
  }, [store]);

  const {
    onLoadStart,
    onLoadedMetadata,
    onLoadedData,
    onCanPlay,
    onCanPlayThrough,
    onWaiting,
    onPlaying,
    onEnded,
    onSeeking,
    onSeeked,
    onPlay,
    onPause,
    onProgress,
    onDurationChange,
    onError,
    onSuspend,
    onAbort,
    onEmptied,
    onStalled,
    onTimeUpdate,
    onRateChange,
    onVolumeChange,
    ...res
  } = audioProps;

  return (
    <audio
      ref={audioRef}
      onLoadStart={(e) => handleNativeEvent(e, onLoadStart)}
      onLoadedMetadata={(e) => handleNativeEvent(e, onLoadedMetadata)}
      onLoadedData={(e) => handleNativeEvent(e, onLoadedData)}
      onCanPlay={(e) => handleNativeEvent(e, onCanPlay)}
      onCanPlayThrough={(e) => handleNativeEvent(e, onCanPlayThrough)}
      onWaiting={(e) => handleNativeEvent(e, onWaiting)}
      onPlaying={(e) => handleNativeEvent(e, onPlaying)}
      onEnded={(e) => handleNativeEvent(e, onEnded)}
      onSeeking={(e) => handleNativeEvent(e, onSeeking)}
      onSeeked={(e) => handleNativeEvent(e, onSeeked)}
      onPlay={(e) => handleNativeEvent(e, onPlay)}
      onPause={(e) => handleNativeEvent(e, onPause)}
      onProgress={(e) => handleNativeEvent(e, onProgress)}
      onDurationChange={(e) => handleNativeEvent(e, onDurationChange)}
      onSuspend={(e) => handleNativeEvent(e, onSuspend)}
      onAbort={(e) => handleNativeEvent(e, onAbort)}
      onEmptied={(e) => handleNativeEvent(e, onEmptied)}
      onStalled={(e) => handleNativeEvent(e, onStalled)}
      onTimeUpdate={(e) => handleNativeEvent(e, onTimeUpdate)}
      onVolumeChange={(e) => handleNativeEvent(e, onVolumeChange)}
      onRateChange={(e) => handleNativeEvent(e, onRateChange)}
      onError={(e) => handleNativeEvent(e, onError)}
      {...res}
    />
  );
};

export default observer(NativeAudio);
