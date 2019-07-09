/**
 * findIndexWith
 *
 * @param {Array.a}    arr
 * @param {Function}   condition
 * @param {a} [defaultVal=arr.length]
 *
 * @returns {Number} the index of the first element in the array that satisfies the condition
 */
const findIndexWith = (arr, condition, defaultVal = arr.length) => {
  const index = arr.findIndex(condition);
  return index !== -1 ? index : defaultVal;
};

/**
 * separateByIntervals - separates array to subarrays with given intervals
 *
 * @param {Array} arr
 * @param {Array.Number} intervals
 *
 * @returns {Array.Array} array with subarrays separated with given intervals
 */
const separateByIntervals = (arr, intervals) => intervals.reduce(
  (result, interval, index) => [...result, arr.slice(interval, intervals[index + 1])],
  [],
);

/**
 * separateByRanges - separates array into 3 ranges: (-∞, 1), [1, 1], (1, +∞)
 *
 * @param {Array.Number} arr
 *
 * @returns {Array.Array.Number}
 */
const separateByRanges = arr => separateByIntervals(
  arr,
  [
    0,
    findIndexWith(arr, val => val >= 1),
    findIndexWith(arr, val => val > 1),
  ],
);

/**
 * getRanges - separateByRanges and reverse (1, +∞) range
 *
 * @param {Array.Number} arr
 *
 * @returns {Array.Array.Number}
 */
const getRanges = (arr) => {
  const [neg, ones, pos] = separateByRanges(arr);
  return [neg, ones, pos.slice().reverse()];
};

/**
 * sliceIterablePart - slice arr to needed length when expect to operate
 *  with two elements at one step
 *
 * @param {Array.a} arr
 *
 * @returns {Array.a} sliced subarray
 */
const sliceIterablePart = arr => arr.slice(0, Math.ceil(arr.length / 2));


module.exports = {
  getRanges,
  sliceIterablePart,
};
