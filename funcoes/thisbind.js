const pessoa = { 
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //undefined

const falarDePessoa = pessoa.falar.bind(pessoa) //assim o 'this' vai sempre ser a const pessoa
falarDePessoa()