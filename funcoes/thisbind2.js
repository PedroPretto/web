function Pessoa(){
    this.idade = 0
    const self = this //apontando para pessoa

    setInterval(function (){
        self.idade++ //sem o bind nao aponta para o objeto pessoa
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa
