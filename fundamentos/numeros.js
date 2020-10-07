const peso1 = 1.0

const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso2))


const avaliacao1 = 5.6
const avaliacao2 = 8.9

const total = (avaliacao1 * peso1) + (avaliacao2 * peso2)
const media = total / (peso2 + peso1)

console.log(media.toFixed(2)) //limitado a duas casas decimais
console.log(media.toString())