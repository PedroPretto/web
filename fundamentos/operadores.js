//relacionais

console.log('01)', '1' == 1) //compara se valor é igual
console.log('02)', '1' === 1) //compara se além de valor igual, possuem mesmo tipo
console.log('03)', '3' != 3) //falso pois '3' é igual a 3 em valor
console.log('04)', '3' !== 3) //verdadeiro pois '3' é igual a 3 em valor mas diferente em tipo

const d1 = new Date(0)
const d2 = new Date(0)
console.log('05)', d1 == d2) //falso pois sao representaçoes de memória diferentes, objetos diferentes
console.log('06)', d1 === d2)//same
console.log('07)', d1.getTime() === d2.getTime())//verdadeiro pois mesmos valores

console.log('08)', null == undefined) //true
console.log('09)', undefined === null)//false