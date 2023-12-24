function addCommas(num) {
  const newNum = num.toLocaleString();

  console.log(typeof newNum);
  return newNum;
}

console.log(addCommas(100000001232.333));

module.exports = addCommas;
