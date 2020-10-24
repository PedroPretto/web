//Função em js é First-Class Object (Citizens)
//Higher-order function

//criar forma literal
function fun1(){}

//armazenando uma function em uma variavel
const func2 = function (){}

//armazenar em um array
const array = [function (){}, func2, fun1]

//armazenar em atributo de objeto
const obj = {falar: function(){console.log('Opa!')}}
obj.falar()

//como parâmetro
function run(fun){
    fun()
}
run(function(){console.log('Parametro')})

//uma função pode retornar outra função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)