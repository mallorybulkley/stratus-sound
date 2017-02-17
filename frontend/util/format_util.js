export const formatDuration = (duration) => {
  const min = `${ Math.floor(duration / 60) }`;
  const sec = ( "0" + String( duration - ( min * 60 ) ) ).slice(-2);
  return min + ":" + sec;
};
