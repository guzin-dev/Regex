// Validação para retornar o index dos espaços e letras

function getSpacesAndNumbersIndex(string) {
  let indexList = [];
  let regexp = new RegExp(/\s/g);
  let regexp2 = new RegExp(/\d/g);
  for (let i = 0; i < string.length; i++) {
    if (regexp.test(string[i]) || regexp2.test(string[i])) {
      indexList.push(i);
    }
  }
  return indexList;
}

console.log(getSpacesAndNumbersIndex("A B 2 "));
