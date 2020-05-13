import { IMediaProperties } from 'lib/types';

export const MEDIA_OWN_PROPERTIES_KEYS = [
  'src',
  'autoplay',
  'controls',
  'loop',
  'muted',
  'crossOrigin',
  'preload',
];

export const MEDIA_PROPERTIES_KEYS: (keyof IMediaProperties)[] = [
  ...MEDIA_OWN_PROPERTIES_KEYS,
  'currentSrc',
  'duration',
  'currentTime',
  'seeking',
  'buffered',
  'paused',
  'ended',
  'playbackRate',
  'muted',
  'volume',
  'readyState',
  'networkState',
] as (keyof IMediaProperties)[];
