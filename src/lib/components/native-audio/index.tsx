import React, { FC, AudioHTMLAttributes, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import AudioStore from 'lib/store/audio';
import { useStores } from 'lib/store';

export interface IAudioProps extends AudioHTMLAttributes<HTMLAudioElement> {
  store: AudioStore;
}

const NativeAudio: FC<IAudioProps> = (props) => {
  const { store, ...audioProps } = props;
  const { handleNativeEvent } = useStores(store);
  const audioRef = useRef<HTMLAudioElement>(null);

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
      onLoadStart={(e) => handleNativeEvent(audioRef, e, onLoadStart)}
      onLoadedMetadata={(e) => handleNativeEvent(audioRef, e, onLoadedMetadata)}
      onLoadedData={(e) => handleNativeEvent(audioRef, e, onLoadedData)}
      onCanPlay={(e) => handleNativeEvent(audioRef, e, onCanPlay)}
      onCanPlayThrough={(e) => handleNativeEvent(audioRef, e, onCanPlayThrough)}
      onWaiting={(e) => handleNativeEvent(audioRef, e, onWaiting)}
      onPlaying={(e) => handleNativeEvent(audioRef, e, onPlaying)}
      onEnded={(e) => handleNativeEvent(audioRef, e, onEnded)}
      onSeeking={(e) => handleNativeEvent(audioRef, e, onSeeking)}
      onSeeked={(e) => handleNativeEvent(audioRef, e, onSeeked)}
      onPlay={(e) => handleNativeEvent(audioRef, e, onPlay)}
      onPause={(e) => handleNativeEvent(audioRef, e, onPause)}
      onProgress={(e) => handleNativeEvent(audioRef, e, onProgress)}
      onDurationChange={(e) => handleNativeEvent(audioRef, e, onDurationChange)}
      onSuspend={(e) => handleNativeEvent(audioRef, e, onSuspend)}
      onAbort={(e) => handleNativeEvent(audioRef, e, onAbort)}
      onEmptied={(e) => handleNativeEvent(audioRef, e, onEmptied)}
      onStalled={(e) => handleNativeEvent(audioRef, e, onStalled)}
      onTimeUpdate={(e) => handleNativeEvent(audioRef, e, onTimeUpdate)}
      onVolumeChange={(e) => handleNativeEvent(audioRef, e, onVolumeChange)}
      onRateChange={(e) => handleNativeEvent(audioRef, e, onRateChange)}
      onError={(e) => handleNativeEvent(audioRef, e, onError)}
      {...res}
    />
  );
};

export default observer(NativeAudio);
