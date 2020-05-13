// 媒体事件类型
export enum EventName {
  /** 当浏览器开始查找媒体时  */
  LOAD_START = 'LOAD_START',
  /** 当浏览器已加载媒体的元数据时 */
  LOADED_META_DATA = 'LOADED_META_DATA',
  /** 当浏览器已加载媒体的当前帧时 */
  LOADED_DATA = 'LOADED_DATA',
  /** 当浏览器可以播放媒体时 */
  CAN_PLAY = 'CAN_PLAY',
  /** 当浏览器可在不因缓冲而停顿的情况下进行播放时 */
  CAN_PLAY_THROUGH = 'CAN_PLAY_THROUGH',
  /** 当视频由于需要缓冲下一帧而停止 */
  WAITING = 'WAITING',
  /** 当媒体在已因缓冲而暂停或停止后已就绪时 */
  PLAYING = 'PLAYING',
  /** 当目前的播放列表已结束时 */
  END = 'END',
  /** 当用户开始移动/跳跃到媒体中的新位置时 */
  SEEKING = 'SEEKING',
  /** 当用户已移动/跳跃到媒体中的新位置时 */
  SEEKED = 'SEEKED',
  /** 当媒体已开始或不再暂停时 */
  PLAY = 'PLAY',
  /** 当媒体已暂停时 */
  PAUSE = 'PAUSE',
  /** 进度改变 */
  PROGRESS = 'PROGRESS',
  /** 当媒体的时长已更改时 */
  DURATION_CHANGE = 'DURATION_CHANGE',
  /** 当浏览器刻意不获取媒体数据时 */
  SUSPEND = 'SUSPEND',
  /** 当媒体的加载已放弃时 */
  ABORT = 'ABORT',
  /** 当目前的播放列表为空时 */
  EMPTIED = 'EMPTIED',
  /** 当浏览器尝试获取媒体数据，但数据不可用时 */
  STALLED = 'STALLED',
  /** 当目前的播放位置已更改时 */
  TIME_UPDATE = 'TIME_UPDATE',
  /** 当音量已更改时 */
  VOLUME_CHANGE = 'VOLUME_CHANGE',
  /** 当播放速率改变时 */
  RATE_CHANGE = 'RATE_CHANGE',
  /** 当在媒体加载期间发生错误时 */
  ERROR = 'ERROR',
  SEEKING_TIME = 'SEEKING_TIME',
  END_SEEKING = 'END_SEEKING',
}

// 媒体属性
export interface IMediaProperties {
  /** 元素中使用的媒体资源的URL */
  src?: string;
  /** 表明在视频加载可用时是否不中断地自动播放资源 */
  autoplay?: boolean;
  /** controls属性控制是否显示用户播放界面的控制 HTML */
  controls?: boolean;
  /** 决定了媒体元素播放结束时是否重新开始 */
  loop?: boolean;
  /** 表示媒体是否静音 */
  muted?: boolean;
  /** 跨域属性 (crossOrigin property)，它允许你配置元素获取数据的 CORS 请求 */
  crossOrigin?: 'anonymous' | 'use-credentials' | '';
  /** 告诉浏览器预加载资源的方式 */
  preload?: 'none' | 'metadata' | 'auto' | '';
  /** 元素中使用的媒体资源的URL */
  currentSrc?: string;
  /** 媒体以秒为单位的总长度时间，如果媒体不可用，则为0.  如果媒体可用，但时间长度未知, 值为NAN. 如果媒体是以stream形式传输并且没有预定长度，则值为Inf */
  duration?: number;
  /** 当前播放时间，单位为秒。为其赋值将会使媒体跳到一个新的时间 */
  currentTime?: number;
  /** 指示媒体是否正在寻找新位置 */
  seeking?: boolean;
  /** buffered属性会告诉浏览器哪一部分的媒体已经被下载（如果浏览器支持的话），按照标准会返回一个TimeRanges对象 */
  buffered?: TimeRanges | null;
  /** 指示媒体元素是否被暂停 */
  paused?: boolean;
  /** 表示媒体是否已经播放完毕 */
  ended?: boolean;
  /** 当前播放媒体的速率。这用于实现用户对快进、慢动作等的控制。正常播放速率乘以该值以获得当前速率，因此值1.0表示正常速率 */
  playbackRate?: number;
  /** 表示音频的音量。值从0.0（静音）到1.0（最大音量） */
  volume?: number;
  /**
   * readyState 媒体的准备状态
   * 0 = HAVE_NOTHING - 没有关于媒体是否就绪的信息
   * 1 = HAVE_METADATA - 关于媒体就绪的元数据
   * 2 = HAVE_CURRENT_DATA - 关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒
   * 3 = HAVE_FUTURE_DATA - 当前及至少下一帧的数据是可用的
   * 4 = HAVE_ENOUGH_DATA - 可用数据足以开始播放
   */
  readyState?: number;
  /**
   * networkState 媒体的的当前网络状态
   * 0 = NETWORK_EMPTY - 媒体的尚未初始化
   * 1 = NETWORK_IDLE - 媒体的是活动的且已选取资源，但并未使用网络
   * 2 = NETWORK_LOADING - 浏览器正在下载数据
   * 3 = NETWORK_NO_SOURCE - 未找到媒体的来源
   */
  networkState?: number;
}

export type EventFormat<T extends EventName, K> = {
  type: T;
  content: K;
};

export type Action =
  | EventFormat<EventName.LOAD_START, IMediaProperties>
  | EventFormat<EventName.LOADED_META_DATA, IMediaProperties>
  | EventFormat<EventName.LOADED_DATA, IMediaProperties>
  | EventFormat<EventName.CAN_PLAY, IMediaProperties>
  | EventFormat<EventName.CAN_PLAY_THROUGH, IMediaProperties>
  | EventFormat<EventName.WAITING, IMediaProperties>
  | EventFormat<EventName.PLAYING, IMediaProperties>
  | EventFormat<EventName.END, IMediaProperties>
  | EventFormat<EventName.SEEKING, IMediaProperties>
  | EventFormat<EventName.SEEKED, IMediaProperties>
  | EventFormat<EventName.PLAY, IMediaProperties>
  | EventFormat<EventName.PAUSE, IMediaProperties>
  | EventFormat<EventName.PROGRESS, IMediaProperties>
  | EventFormat<EventName.DURATION_CHANGE, IMediaProperties>
  | EventFormat<EventName.SUSPEND, IMediaProperties>
  | EventFormat<EventName.ABORT, IMediaProperties>
  | EventFormat<EventName.EMPTIED, IMediaProperties>
  | EventFormat<EventName.STALLED, IMediaProperties>
  | EventFormat<EventName.TIME_UPDATE, IMediaProperties>
  | EventFormat<EventName.VOLUME_CHANGE, IMediaProperties>
  | EventFormat<EventName.RATE_CHANGE, IMediaProperties>
  | EventFormat<EventName.ERROR, IMediaProperties>;
