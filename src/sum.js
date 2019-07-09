const { getRanges, sliceIterablePart } = require('./base');

/**
 * maybeGetAt
 *
 * @param {Array.Number}   arr
 * @param {Number}   index
 * @param {Number} [defaultVal=1]
 *
 * @returns {Number} value at given index or defaultVal
 */
const maybeGetAt = (arr, index, defaultVal = 1) => (
  arr[index] !== undefined ? arr[index] : defaultVal
);

/**
 * mulWithNext - multiplies value at specified index with the next one, if possible
 *
 * @param {Array.Number} arr
 * @param {Number} index
 *
 * @returns {Number}
 */
const mulWithNext = (arr, index) => arr[index] * maybeGetAt(arr, index + 1);

/**
 * maybeMulWithNext
 *
 * @param {Array.Number} arr
 * @param {Number} index
 *
 * @returns {Number}
 */
const maybeMulWithNext = (arr, index) => (
  arr[index] >= 0 && arr[index] < 1
    ? arr[index] + maybeGetAt(arr, index + 1, 0)
    : mulWithNext(arr, index)
);

/**
 * getPairsSum
 *
 * @param {Array.Number} arr
 *
 * @returns {Number}
 */
const getPairsSum = (arr, mulFn = mulWithNext) => sliceIterablePart(arr).reduce(
  (sum, _, index) => sum + mulFn(arr, index * 2),
  0,
);


const getArraysSum = ([neg, ones, pos]) => (
  getPairsSum(neg, maybeMulWithNext) + ones.reduce((sum, el) => sum + el, 0) + getPairsSum(pos)
);


/**
 * getBiggestSum - get the biggest possible sum
 *
 * @param {Array.Number} arr
 *
 * @returns {Number}
 */
const getBiggestSum = arr => getArraysSum(getRanges([...arr].sort((a, b) => a - b)));


module.exports = {
  getBiggestSum,
};
