/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;

  for (let i = 0; i < preferences.length; i++) {
    let firstSp = preferences[i];
    let secondSp = preferences[firstSp - 1];
    let thirdSp = preferences[secondSp - 1];

    if ((thirdSp === i + 1)) {

      if (firstSp == secondSp || secondSp == thirdSp) continue;
      
      count++;
      preferences[i] = 0;
    };
  };
  return count;
};
