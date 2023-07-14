// Validar com uma expressão regular para substituir o caracter “T ou t" pelo digito 7

function tToSeven(string){
  return string.replace(/t/ig, 7)
}

console.log(tToSeven("Alo isso é um Teste"))