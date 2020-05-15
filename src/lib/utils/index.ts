/**
 *
 * Format seconds as a time string, H:MM:SS or M:SS
 * Supplying a guide (in seconds) will force a number of leading zeros
 * to cover the length of the guide
 * 注意：须将'秒'向上取整 - 因为通话计费是向上取整
 *
 * @param  {Number} seconds Number of seconds to be turned into a string
 * @param  {Number} guide   Number (in seconds) to model the string after
 * @return {String}         Time formatted as H:MM:SS or M:SS
 * @private
 * @function formatTime
 */
export const formatTime = (seconds: number, guide = seconds) => {
  if (Number.isNaN(seconds) || seconds === Infinity || seconds === 0) {
    return '0:00';
  }
  // second 须向上取整
  let s: number | string = Math.ceil(seconds % 60);
  // 当 second（second可能为59.253672）向上取整等于 60 时, minute 须向上取整; 否则, 向下取整.
  let m: number | string =
    s === 60 ? Math.ceil((seconds / 60) % 60) : Math.floor((seconds / 60) % 60);
  // 当 minute（second可能为3599.253672）向上取整等于 60 时，hour 须向上取整；否则，向下取整.
  let h: number | string = m === 60 ? Math.ceil(seconds / 3600) : Math.floor(seconds / 3600);
  const gm = s === 60 ? Math.ceil((guide / 60) % 60) : Math.floor((guide / 60) % 60);
  const gh = Math.floor(guide / 3600);
  s = s === 60 ? 0 : s;
  m = m === 60 ? 0 : m;

  // Check if we need to show hours
  h = h > 0 || gh > 0 ? `${h}:` : '';

  // If hours are showing, we may need to add a leading zero.
  // Always show at least one digit of minutes.
  // m = `${(h || gm >= 10) && m < 10 ? `0${m}` : m}:`;
  m = `${(h || gm >= 10) && m < 10 ? `0${m}` : m}:`;

  // Check if leading zero is need for seconds
  s = s < 10 ? `0${s}` : s;
  return h + m + s;
};

/**
 * get the percent width of a time compared to the total end
 *
 * @param time 当前时间
 * @param end 总时间
 */
export const percentify = (time: number, end: number) => {
  const percent = time / end || 0;
  return `${(percent >= 1 ? 1 : percent) * 100}%`;
};
