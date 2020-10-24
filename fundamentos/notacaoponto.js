console.log(Math.ceil(6.1)) //acessando metodos de objetos


const objeto = {}
//ambas as formas abaixo são validas
objeto.nome = 'Bola' 
objeto['preco'] = 15.99
console.log(objeto)

function Obj(nome){
    this.nome = nome
}

objeto1 = new Obj('cadeira')
console.log(objeto1)