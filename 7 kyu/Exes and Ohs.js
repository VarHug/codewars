// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// solution date: 2020-09-28

function XO(str) {
  const xoMap = {
    o: 1,
    x: 1,
  }
  for (let i = 0; i < str.length; i++) {
    const c = str[i].toLowerCase();
    xoMap[c] && xoMap[c]++;
  }
  return xoMap.o === xoMap.x;
}
