const { separateByRanges, sliceIterablePart } = require('./base');

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
 * getSequence - transforms single elements array to singles and pairs
 *
 * @param {Array.a} arr
 *
 * @returns {{Array[Array.a | a]}}
 */
const getSequence = arr => sliceIterablePart(arr).reduce(
  (res, _, index) => [...res, combineWithNext(arr, index * 2)],
  [],
);

const concatSequences = ([neg, ones, pos]) => ([
  ...getSequence(neg),
  ...ones,
  ...getSequence(pos),
]);

/**
 * getSumSequence - get the sequence of pairs and singles which give the biggest possible sum
 *
 * @param {Array.Number} arr array with numbers
 *
 * @returns {Array[Array.Number | Number]} an array of pairs and singles
 */
const getSumSequence = arr => concatSequences(
  separateByRanges(
    [...arr].sort((a, b) => a - b),
  ),
);


module.exports = {
  getSumSequence,
};
