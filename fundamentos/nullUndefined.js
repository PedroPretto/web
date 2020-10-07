const a = {name: 'pedro'}

const b = a // duas referências para o mesmo local de memória

b.name = 'jorgim'

console.log(b)

let c = 3

let d = c // cópia do valor

d++

console.log(d, c)


let valor // nao inicializado
console.log(valor) //undefined

valor = null //ausência de valor

console.log(valor)

const produto = {}
console.log(produto.nome) //nome não foi definido