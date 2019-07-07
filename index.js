/**
 * findIndexGreaterThan
 *
 * @param {Array.a}    arr
 * @param {a}    value
 * @param {a} [defaultVal=arr.length]
 *
 * @returns {Number} the index of the first element in the array greater than *value*
 */
const findIndexGreaterThan = (arr, value, defaultVal = arr.length) => {
  const index = arr.findIndex(val => val > value);
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
 * combineWithNext - combine array element with the next one, if possible
 *
 * @param {Array.a} arr
 * @param {Number} index
 *
 * @returns {Array.a | a} combined pair or single element
 */
const combineWithNext = (arr, index) => (
  arr[index + 1] === undefined ? arr[index] : [arr[index], arr[index + 1]]
);

/**
 * getSequence - transforms single elements array to singles and paires
 *
 * @param {Array.a} arr
 *
 * @returns {{Array[Array.a | a]}}
 */
const getSequence = arr => (
  arr.slice(0, Math.ceil(arr.length / 2)).reduce(
    (res, _, index) => [...res, combineWithNext(arr, index * 2)],
    [],
  )
);

const concatSequences = ([neg, ones, pos]) => ([
  ...getSequence(neg),
  ...ones,
  ...getSequence(pos),
]);

/**
 * getSortedArraySequence - get the sequence of pairs and singles which give
 *  the biggest possible sum in sortedd array
 *
 * @param {Array.Number} arr sorted array with numbers
 *
 * @returns {Array[Array.Number | Number]} array of pairs and singles
 */
const getSortedArraySequence = arr => (
  concatSequences(
    separateByIntervals(
      arr,
      [
        0,
        findIndexGreaterThan(arr, 0),
        findIndexGreaterThan(arr, 1),
      ],
    ),
  )
);

/**
 * getSumSequence - get the sequence of pairs and singles which give the biggest possible sum
 *
 * @param {Array.Number} arr array with numbers
 *
 * @returns {Array[Array.Number | Number]} array of pairs and singles
 */
const getSumSequence = arr => getSortedArraySequence([...arr].sort((a, b) => a - b));


module.exports = {
  getSumSequence,
};
