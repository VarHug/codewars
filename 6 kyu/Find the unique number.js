// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// solution date: 2020-09-29
function findUniq(arr) {
  const numMap = {};
  arr.forEach((n) => {
    if (numMap[n]) {
      numMap[n] = numMap[n] + 1;
    } else {
      numMap[n] = 1;
    }
  });
  const k = Object.keys(numMap).find((key) => {
    return numMap[key] === 1;
  });
  return +k;
}
