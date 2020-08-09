const checkValid = require('./checkValid.js');

let defaultSet = [10, 20, 30, 40, 50, 60];

// describe('bounds are valid', () => {
// 	test('minimum bound is too low', () => {
// 		expect(checkValid(-1, 100, defaultSet)).toBe(false);
// 	});
// 	test('maximum bound is too high', () => {
// 		expect(checkValid(0, 101, defaultSet)).toBe(false);
// 	});
// });

describe('verifying all set values within bounds', () => {
  // test('values fall within specified range', () => {
  //   expect(checkValid(0, 100, defaultSet)).toBe(true);
  // });

  // test('one value falls below minimum bound', () => {
  //   expect(checkValid(15, 100, defaultSet)).toBe(false);
  // });

  // test('one value falls above maximum bound', () => {
  //   expect(checkValid(0, 55, defaultSet)).toBe(false);
  // });

  test('minimum value in the set is equal to the minimum bound', () => {
    expect(checkValid(10, 100, defaultSet)).toBe(true);
  });

  test('maximum value in the set is equal to the maximum bound', () => {
    expect(checkValid(0, 60, defaultSet)).toBe(true);
  });
});

describe('verifying average of values in set within bounds', () => {
	// test('average falls within specified range', () => {
	// 	expect(checkValid(0, 100, defaultSet, true)).toBe(true);
	// });

	// test('average below minimum bound', () => {
	// 	expect(checkValid(40, 100, defaultSet, true)).toBe(false);
	// });

	// test('average above maximum bound', () => {
	// 	expect(checkValid(0, 30, defaultSet, true)).toBe(false);
	// });

	test('average equal to minimum bound', () => {
		expect(checkValid(35, 100, defaultSet, true)).toBe(true);
	});

	test('average equal to maximum bound', () => {
		expect(checkValid(0, 35, defaultSet, true)).toBe(true);
	});
});