//recurso ecmascript 2015

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: 'rua rosa',
        numero: 97
    }
}

const {nome,idade} = pessoa //extrai nome e idade do objeto
console.log(nome, idade)

//ou por exemplo
const {nome: n, idade: i} = pessoa
console.log(n,i)

//e para o endereço?
const {endereco:{logradouro, numero}} = pessoa
console.log(logradouro,numero)

//para buscar o endereco inteiro
const {endereco} = pessoa
console.log(endereco)

///////////////////////////
//destructuring com array//
///////////////////////////

const [a] = [10]
console.log(a)

//ignora o primeiro array e pega apenas o segundo item do segundo array
const [,[, nota]] = [[,8,8],[9,6,8]] 
console.log(nota)


/////////////////////////////
//destructuring com funções//
/////////////////////////////

//parametros com valores padrao
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const range = {max: 50, min: 40}
console.log(rand(range))
console.log(rand({})) //da certo, usa valores padrao
//console.log(rand()) da errado pois nao tem objeto algum


//////////////////////////////////////////////////////////
//passando arrays como parametros e usando destructuring//
//////////////////////////////////////////////////////////

function randomic([min = 0, max = 1000]){
    if (min > max) [min,max] = [max,min] //inverte caso o minimo seja maior que o máximo
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(randomic([12, 50]))
console.log(randomic([997]))