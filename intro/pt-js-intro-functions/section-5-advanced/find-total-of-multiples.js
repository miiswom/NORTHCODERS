const { check, runTest, skipTest } = require("../test-api/index");

/* 
If we list all the whole numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.

The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the limit passed in as an argument.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once! */

function findTotalOfMultiples(limit) {
  // your solution
  let newArr = []
  for(let i=1; i < limit; i++) {
    newArr.push(i)
  }
  
  let filtered = newArr.filter((e) => e % 3 === 0 || e % 5 === 0)

  return filtered.reduce((acc, e) => +acc + +e, 0)
}

//console.log(findTotalOfMultiples(10))

runTest("findTotalOfMultiples() return zero for negative numbers", function () {
  check(findTotalOfMultiples(-1)).isEqualTo(0);
});

runTest("findTotalOfMultiples() returns first multiple of 3", function () {
  check(findTotalOfMultiples(4)).isEqualTo(3);
});

runTest(
  "findTotalOfMultiples() returns sum of multiples of 3 or 5  below limit ",
  function () {
    check(findTotalOfMultiples(6)).isEqualTo(8);
    check(findTotalOfMultiples(10)).isEqualTo(23);
  }
);
