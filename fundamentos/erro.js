function nomeUpper(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch(e) {
        throw new Error('...') //agora ele poderia informar o problema, poderia também por exemplo ser um objeto
    } finally {
        console.log('Bloco finally sempre vai executado, ocorrendo erro ou não')
    }
}

const obj = {name: 'Pedro'}
nomeUpper(obj)