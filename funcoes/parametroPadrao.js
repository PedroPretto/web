//estratégia 1 para gerar valor padrão
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a+b+c
}
//nesse caso se um dos valores for zero, o parametro será falso e o numero 1 sera utilizado
console.log(soma1(1,2,3))


//estratégias 2,3,4
function soma2(a,b,b){
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
}


//padrão es2015
function soma3(a = 1, b = 2, c = 3){
    return a+b+c
}
console.log(soma3(0,0,0))

