// Buscar em um texto a palavra a sua escolha, quantas vezes ela aparecer.

function getAppareances(string, word){
  let counter = 0
  let regexp = new RegExp(word, 'ig')
  for(let i = 0; i < string.split(" ").length; i++){
    if(regexp.test(string.split(" ")[i])) counter++
  }
  return "A palavra " + word + " aparece " + counter + " vezes"
}

console.log(getAppareances("Gustavos é muito Gustavo", "Gustavo"))