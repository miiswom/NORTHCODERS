function herdTheBabies(str) {
  let output = ""

  if (str && str.length <= 1) { output = str }
  else if (str.length > 1) {
    let lowerCases = /[a-z]/;
    let allParents = []
    let allChildren = []
    str.split("").filter((e) => e.match(lowerCases) ? allChildren.push(e) : allParents.push(e)); // <--- to refactor
    allChildren.sort((a, b) => a > b ? 1 : -1);
    allParents.sort((a, b) => a > b ? 1 : -1)

    let allParentsCount = {};
    for (let i = 0; i < allParents.length; i++) {
      if (allParentsCount[allParents[i]] !== undefined) {
        allParentsCount[allParents[i]].push(allParents[i])
      } else {
        allParentsCount[allParents[i]] = [allParents[i]]
      }
    }
    for (let parent in allParentsCount) {
      let firstParent = allParentsCount[parent][0]
      let currentParent = allParentsCount[parent];
      if (allChildren.includes(firstParent.toLowerCase())) {
        allChildren.splice(allChildren.findIndex((e) => e == firstParent.toLowerCase()), 0, currentParent)
      }
    }
    return allChildren.length > 0 ? allChildren.flat().join("") : allParents.join("")
  }
  return output
}

console.log(herdTheBabies("a"));
console.log(herdTheBabies("aA"));
console.log(herdTheBabies("aaaAA"));
console.log(herdTheBabies("aaaAABb"))
console.log(herdTheBabies("ccAAAaaaCCBbbb"));
console.log(herdTheBabies("BAC"));

module.exports = herdTheBabies