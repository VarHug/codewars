// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// solution date: 2020-09-28
function sumTwoSmallestNumbers(numbers) {
  const mins = numbers[0] < numbers[1] ? [numbers[0], numbers[1]] : [numbers[1], numbers[0]];
  for (let i = 2; i < numbers.length; i++) {
    const n = numbers[i];
    if (n < mins[0]) {
      mins[1] = mins[0];
      mins[0] = n;
    } else if (n < mins[1]) {
      mins[1] = n;
    }
  }
  return mins[0] + mins[1];
}
