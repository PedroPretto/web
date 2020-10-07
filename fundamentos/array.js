const valores = [5, 6, 10]

valores.forEach(element => {
    console.log(element)
});

valores[10] = 15
console.log(valores)
console.log(valores.length)

console.log(valores.pop()) //retira o ultimo elemento do array e o retorna

delete valores[0]
console.log(valores)

console.log(typeof valores)