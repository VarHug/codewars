// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// solution date: 2020-09-29
function getCount(str) {
  const match = str.match(/[aeiou]/g);
  return match ? match.length : 0;
}
