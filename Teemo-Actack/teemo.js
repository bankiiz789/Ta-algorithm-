exports.findPoisonedDuration = function (timeSeries, duration) {
  if (duration == 0 || timeSeries.length == 0) {
    return 0;
  }
  let poison = 0;
  for (let i = 0; i < timeSeries.length; i++) {
    if (timeSeries[i + 1] - timeSeries[i] == 1) {
      poison += duration / duration;
    } else {
      if (timeSeries[i + 1] - timeSeries[i] < duration) {
        poison += timeSeries[i + 1] - timeSeries[i];
      } else {
        poison += duration;
      }
    }
  }

  return poison;
};
