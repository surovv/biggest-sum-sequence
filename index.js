/**
 * findIndexGreaterThan
 *
 * @param {Array}    arr
 * @param {type}    value
 * @param {Number} [defaultVal=arr.length]
 *
 * @returns {Number} smallest index with value greater than second arg
 */
const findIndexGreaterThan = (arr, value, defaultVal = arr.length) => {
  const index = arr.findIndex(val => val > value);
  return index !== -1 ? index : defaultVal;
};

/**
 * separateByIntervals - separates array with given intervals
 *
 * @param {Array} arr
 * @param {Array.Number} intervals
 *
 * @returns {Array.Array} array with subarrays separated with given intervals
 */
const separateByIntervals = (arr, intervals) => intervals.reduce(
  (result, interval, index) => result.concat([arr.slice(interval, intervals[index + 1])]),
  [],
);


/**
 * combineWithNext - combine element with next in array if possible
 *
 * @param {Array} arr
 * @param {Number} index
 *
 * @returns {Array.a | a} array with two elements or single element
 */
const combineWithNext = (arr, index) => (
  arr[index + 1] === undefined ? arr[index] : [arr[index], arr[index + 1]]
);

/**
 * getSequence - transforms array of single elements array with single and paired elements
 *
 * @param {Array} arr
 *
 * @returns {Array}
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
 * getSortedArraySequence
 *
 * @param {Array} arr
 *
 * @returns {Array}
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
 * @param {Array} arr
 *
 * @returns {Array} array of pairs and singles
 */
const getSumSequence = arr => getSortedArraySequence([...arr].sort((a, b) => a - b));


module.exports = {
  getSumSequence,
};
