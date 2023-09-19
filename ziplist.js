const arrOne = [1, 2, 3, 4];
const arrTwo = [5, 6, 7, 8];

function zipList(listOne, listTwo) {
  const arr = [];
  for (let i = 0; i < listOne.length; i++) {
    arr.push(listOne[i]);
    arr.push(listTwo[i]);
  }
  return arr;
}

console.log(zipList(arrOne, arrTwo));

function zipListTheSimpleWay(listOne, listTwo) {
  return _.zip(listOne, listTwo);
}

console.log(zipListTheSimpleWay(arrOne, arrTwo));
// DNF
