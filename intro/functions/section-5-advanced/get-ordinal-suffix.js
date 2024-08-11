const { check, runTest, skipTest } = require("../test-api/index.js");

/*
An ordinal suffix are the letters we put after a number:
E.g. "nd" is an ordinal suffix as we'd write 2nd and "st" is an ordinal suffix as we'd write 1st etc

This function should take a number as an argument and should return the corresponding ordinal suffix

See here for more details: https://www.grammarly.com/blog/how-to-write-ordinal-numbers-correctly/
*/

function getOrdinalSuffix(num) {
  // your solution here
  // 1st || 21st ...
  if(num === 1 || String(num).endsWith("1")) {
    return "st"
  }
  // 2nd || 22nd ...
  else if(num === 2 || String(num).endsWith("2")) {
    return "nd"
  }
  // 3rd || 23rd ...
  else if(num === 3 || String(num).endsWith("3")) {
    return "rd"
  } else {
    return "th"
  }
  // from 4th - 20th inclusive
}

runTest("getOrdinalSuffix() returns 'st' when given 1", function () {
  check(getOrdinalSuffix(1)).isEqualTo("st");
});

runTest("getOrdinalSuffix() returns 'nd' when given 2", function () {
  check(getOrdinalSuffix(2)).isEqualTo("nd");
});

runTest("getOrdinalSuffix() returns 'rd' when given 3", function () {
  check(getOrdinalSuffix(3)).isEqualTo("rd");
});

runTest(
  "getOrdinalSuffix() returns 'th' given any single digit number above 3",
  function () {
    check(getOrdinalSuffix(4)).isEqualTo("th");
    check(getOrdinalSuffix(7)).isEqualTo("th");
    check(getOrdinalSuffix(9)).isEqualTo("th");
  }
);

runTest(
  "getOrdinalSuffix() returns 'th' given any value between 10 and 20 inclusive",
  function () {
    check(getOrdinalSuffix(10)).isEqualTo("th");
    check(getOrdinalSuffix(11)).isEqualTo("th");
    check(getOrdinalSuffix(15)).isEqualTo("th");
    check(getOrdinalSuffix(19)).isEqualTo("th");
    check(getOrdinalSuffix(20)).isEqualTo("th");
  }
);

runTest(
  "getOrdinalSuffix() returns 'st' for numbers above 20 ending in 1",
  function () {
    check(getOrdinalSuffix(21)).isEqualTo("st");
    check(getOrdinalSuffix(41)).isEqualTo("st");
  }
);

runTest(
  "getOrdinalSuffix() returns 'nd' for numbers above 20 ending in 2",
  function () {
    check(getOrdinalSuffix(22)).isEqualTo("nd");
    check(getOrdinalSuffix(32)).isEqualTo("nd");
  }
);

runTest(
  "getOrdinalSuffix() returns 'rd' for numbers above 20 ending in 3",
  function () {
    check(getOrdinalSuffix(23)).isEqualTo("rd");
    check(getOrdinalSuffix(63)).isEqualTo("rd");
  }
);

runTest("getOrdinalSuffix() returns 'th' for any other numbers", function () {
  check(getOrdinalSuffix(27)).isEqualTo("th");
  check(getOrdinalSuffix(98)).isEqualTo("th");
});
