const arrOne = [1, 2, 3];
const arrTwo = [4, 5, 6];

function zipList(first, second) {
  const arr = [];
  for (let i = 0; i < first.length; i++) {
    arr.push(first[i], second[i]);
  }
  return arr;
}

console.log(zipList(arrOne, arrTwo));

const zipListTheSimpleWay = (first, second) => _.flatten(_.zip(first, second));

console.log(zipListTheSimpleWay(arrOne, arrTwo));
