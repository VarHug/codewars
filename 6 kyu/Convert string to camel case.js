// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples

// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

// solution date: 2020-09-28
function toCamelCase(str){
  let ret = '';
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c === '_' || c === '-') {
      c = str[++i].toUpperCase();
    }
    ret += c;
  }
  return ret;
}

// 社区优质代码
function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
