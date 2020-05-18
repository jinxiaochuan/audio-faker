import { RefObject, SyntheticEvent, ReactEventHandler } from 'react';
import { observable, action } from 'mobx';
import { IMediaProperties } from '../../types';
import { MEDIA_PROPERTIES_KEYS } from '../../constants';

const DEFAULT_MEDIA_PROPERTIES: IMediaProperties = {
  src: '',
  currentSrc: '',
  autoplay: false,
  controls: false,
  loop: false,
  muted: false,
  crossOrigin: '',
  preload: 'metadata',
  duration: 0,
  currentTime: 0,
  seeking: false,
  buffered: null,
  paused: true,
  ended: false,
  playbackRate: 1,
  volume: 1,
  readyState: 0,
  networkState: 0,
};

class AudioStore {
  @observable
  audioRef: RefObject<HTMLAudioElement> | null = null;

  @observable
  mediaProperties: IMediaProperties = DEFAULT_MEDIA_PROPERTIES;

  /** 拖动媒体播放进度条时「快进或快退」拖动至的时间位置 */
  @observable
  seekingTime: number = 0;

  /** 是否正在等待 */
  @observable
  waiting: boolean = false;

  /** 用户是否触摸状态 */
  @observable
  userActivity: boolean = false;

  /** 标志视频将被“inline”播放，即在元素的播放区域内。请注意，没有此属性并不意味着视频始终是全屏播放的 */
  @observable
  playsinline: boolean = false;

  @action
  setAudioRef = (audioRef: RefObject<HTMLAudioElement>) => {
    this.audioRef = audioRef;
  };

  @action
  setSeekingTime = (seekingTime: number, seekingEnd: boolean = false) => {
    this.seekingTime = seekingTime;
    if (seekingEnd) {
      this.setCurrentTime(seekingTime);
    }
  };

  @action
  setUserActivity = (userActivity: boolean) => {
    this.userActivity = userActivity;
  };

  /** 设置是否静音 */
  @action
  setMuted = (muted: boolean) => {
    if (this.audioRef && this.audioRef.current) {
      this.audioRef.current.muted = muted;
      this.updateMediaProperties();
    }
  };

  /** 设置播放时间 */
  @action
  setCurrentTime = (currentTime: number) => {
    if (this.audioRef && this.audioRef.current) {
      this.audioRef.current.currentTime = currentTime;
      this.updateMediaProperties();
    }
  };

  /** 播放 */
  @action
  play = () => {
    if (this.audioRef && this.audioRef.current) {
      this.audioRef.current.play();
      this.updateMediaProperties();
    }
  };

  /** 暂停 */
  @action
  pause = () => {
    if (this.audioRef && this.audioRef.current) {
      this.audioRef.current.pause();
      this.updateMediaProperties();
    }
  };

  /** 原生媒体事件监听触发 */
  @action
  handleNativeEvent = (
    e: SyntheticEvent<HTMLAudioElement, Event>,
    nativeCallback?: ReactEventHandler<HTMLAudioElement>,
  ) => {
    this.updateMediaProperties();
    nativeCallback && nativeCallback(e);
  };

  /** 更新媒体属性 */
  @action
  updateMediaProperties = () => {
    this.mediaProperties = this.getMediaProperties();
  };

  /** 获取媒体的所有属性 */
  getMediaProperties = () => {
    if (this.audioRef && this.audioRef.current) {
      return MEDIA_PROPERTIES_KEYS.reduce(
        (properties: IMediaProperties, key: keyof IMediaProperties) => {
          return {
            ...properties,
            [key]: (this.audioRef.current || DEFAULT_MEDIA_PROPERTIES)[key],
          };
        },
        {} as IMediaProperties,
      );
    }
    return { ...DEFAULT_MEDIA_PROPERTIES };
  };
}

export default AudioStore;
