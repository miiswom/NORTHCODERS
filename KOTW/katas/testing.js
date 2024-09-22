function herdTheBabies(str) {
  let output = ""

  if (str && str.length <= 1) { output = str }
  else if (str.length > 1) {

    if (str.split("").every((char) => char[0].toLowerCase)) {
      const sortedChar = str.split("").sort((a, b) => a < b ? -1 : 1).join("");
      output = sortedChar;
    } else {
      let lowerCases = /[a-z]/;

      let parents = []
      let children = []
      str.split("").filter((e) => e.match(lowerCases) ? children.push(e) : parents.push(e));

      let parentsCount = {};
      for (let i = 0; i < parents.length; i++) {
        if (parentsCount[parents[i]] !== undefined) {
          parentsCount[parents[i]].push(parents[i])
        } else {
          parentsCount[parents[i]] = [parents[i]]
        }
      }

      console.log(children)
      console.log(parentsCount)
      for (let i = 0; i < Object.keys(parentsCount).length; i++) {
        for (let letter in parentsCount) {
          console.log("letter", parentsCount[letter][i])
          if (parentsCount[letter][i] !== undefined) {
            if (children.includes(parentsCount[letter][i].toLowerCase())) {
              children.splice(children.indexOf(parentsCount[letter][i].toLowerCase()), 0, parentsCount[letter][i])
            }
          }

        }

        // console.log(children)

      }
      output = children.join("")


    }

    // console.log(output)
  }
  return output
}
// grab all the char that are uppercases
// use regex
// store them in an array

// grab all the char that are lowercases
// use regex
// store them in an tally with the letter as prop and their count as value

//
//  chilren ['a', 'a', 'a', 'b']
//  parents {'a': ['a'], 'b': ['b']}

console.log(herdTheBabies("aaaAABb"))

module.exports = herdTheBabies