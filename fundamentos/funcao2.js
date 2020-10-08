// Armazenando uma função em uma variável

const imprimirSoma = function (a,b){
    return a + b
}

console.log(imprimirSoma(2,3))

// Armazenando uma arrow function em uma variável

const  soma = (a,b) => {
    return a + b
}

console.log(soma(2,2))

// retorno implícito
const subtracao = (a,b) => a - b

console.log(subtracao(3,2))