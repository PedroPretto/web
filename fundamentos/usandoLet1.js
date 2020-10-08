var numero = 1

{
    let numero = 2 //let se importa com escopo de bloco, se não houvesse numero nesse escopo ele procuraria em escopo esterno
    console.log(numero)
}

console.log(numero)