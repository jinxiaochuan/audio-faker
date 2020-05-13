import React, { RefObject, SyntheticEvent, ReactEventHandler } from 'react';
import { observable, action, toJS } from 'mobx';
import { IMediaProperties } from 'lib/types';
import { MEDIA_PROPERTIES_KEYS } from 'lib/constants';

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

class Store {
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

  /** 客户端开始请求数据 */
  @action
  handleLoadStart = (
    audioRef: RefObject<HTMLAudioElement>,
    e: SyntheticEvent<HTMLAudioElement, Event>,
    nativeCallback?: ReactEventHandler<HTMLAudioElement>,
  ) => {
    this.updateMediaProperties(audioRef);
    nativeCallback && nativeCallback(e);
  };

  /** 原生媒体事件监听触发 */
  @action
  handleNativeEvent = (
    audioRef: RefObject<HTMLAudioElement>,
    e: SyntheticEvent<HTMLAudioElement, Event>,
    nativeCallback?: ReactEventHandler<HTMLAudioElement>,
  ) => {
    this.updateMediaProperties(audioRef);
    nativeCallback && nativeCallback(e);
  };

  /** 更新媒体属性 */
  @action
  updateMediaProperties = (audioRef: RefObject<HTMLAudioElement>) => {
    this.mediaProperties = this.getMediaProperties(audioRef);
  };

  /** 获取媒体的所有属性 */
  getMediaProperties = (audioRef: RefObject<HTMLAudioElement>) => {
    if (audioRef.current) {
      return MEDIA_PROPERTIES_KEYS.reduce(
        (properties: IMediaProperties, key: keyof IMediaProperties) => {
          return {
            ...properties,
            [key]: (audioRef.current || DEFAULT_MEDIA_PROPERTIES)[key],
          };
        },
        {} as IMediaProperties,
      );
    }
    return { ...DEFAULT_MEDIA_PROPERTIES };
  };
}

const storeContext = React.createContext(new Store());

export const useStores = () => React.useContext(storeContext);
