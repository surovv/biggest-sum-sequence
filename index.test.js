const assert = require('assert');

const { getSumSequence, getBiggestSum } = require('./index');


describe('getSumSequence test', () => {
  it('should return expected sequences', () => {
    assert.strictEqual(
      JSON.stringify(getSumSequence([0, 1, 2, 3, 4, 5])),
      JSON.stringify([0, 1, [5, 4], [3, 2]]),
    );

    assert.strictEqual(
      JSON.stringify(getSumSequence([-1, 0, 1])),
      JSON.stringify([[-1, 0], 1]),
    );

    assert.strictEqual(
      JSON.stringify(getSumSequence([1, 1])),
      JSON.stringify([1, 1]),
    );

    assert.strictEqual(
      JSON.stringify(getSumSequence([])),
      JSON.stringify([]),
    );

    assert.strictEqual(
      JSON.stringify(getSumSequence([9])),
      JSON.stringify([9]),
    );

    assert.strictEqual(
      JSON.stringify(getSumSequence([0, 9])),
      JSON.stringify([0, 9]),
    );

    assert.strictEqual(
      JSON.stringify(getSumSequence([-9, 9])),
      JSON.stringify([-9, 9]),
    );

    assert.strictEqual(
      JSON.stringify(getSumSequence([-9, -8, -1, -1, 0, 1, 2, 3, 9])),
      JSON.stringify([[-9, -8], [-1, -1], 0, 1, [9, 3], 2]),
    );
  });
});

describe('getBiggestSum test', () => {
  it('should return expected sums', () => {
    assert.strictEqual(getBiggestSum([0, 1, 2, 3, 4, 5]), 27);

    assert.strictEqual(getBiggestSum([-1, 0, 1]), 1);

    assert.strictEqual(getBiggestSum([1, 1]), 2);

    assert.strictEqual(getBiggestSum([-9, 0, 9]), 9);

    assert.strictEqual(getBiggestSum([2, 3, 9]), 29);

    assert.strictEqual(getBiggestSum([-9, -8, -7, 1, 2, 3, 9]), 95);

    assert.strictEqual(getBiggestSum([-9, -2, -1, 1, 1, 2, 4]), 27);

    assert.strictEqual(getBiggestSum([]), 0);
  });

  it('should not be equal', () => {
    assert.notStrictEqual(getBiggestSum([0, 1, 2, 3, 4, 5]), 0);

    assert.notStrictEqual(getBiggestSum([-1, 0, 1]), 0);

    assert.notStrictEqual(getBiggestSum([1, 1]), 0);

    assert.notStrictEqual(getBiggestSum([-9, 0, 9]), 0);

    assert.notStrictEqual(getBiggestSum([2, 3, 9]), 15);

    assert.notStrictEqual(getBiggestSum([-9, -2, -1, 2, 3, 9]), 34);
  });
});
