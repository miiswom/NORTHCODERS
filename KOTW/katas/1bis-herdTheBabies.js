function herdTheBabies(str) {
  const chars = str.split("");
  let sortedStr = "";

  const sortedChars = chars.sort((charA,  charB) => {
    const lowerCaseA = charA.toLowerCase();
    const lowerCaseB = charB.toLowerCase();

    if(lowerCaseA === lowerCaseB) return charB.localeCompare(charA);
    else return lowerCaseA.localeCompare(lowerCaseB);
  });
  return sortedStr = sortedChars.join("")
}

console.log(herdTheBabies("a"));
console.log(herdTheBabies("aA"));
console.log(herdTheBabies("aaaAA"));
console.log(herdTheBabies("aaaAABb"))
console.log(herdTheBabies("ccAAAaaaCCBbbb"));
console.log(herdTheBabies("BAC"));

module.exports = herdTheBabies