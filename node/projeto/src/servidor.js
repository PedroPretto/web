const porta = 3003

const express = require('express')
const app = express()
const db = require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))


app.get('/produtos', (req, res, next)=>{
    res.send(db.getProdutos()) //vai converter pra json e retornar o index
})

app.get('/produtos/:id', (req, res, next) =>{
    res.send(db.getProduto(req.params.id)) //busca produto por id
})

app.post('/produtos', (req,res, next) =>{
    const produto = db.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    }) //cria no 'banco' e retorna o produto
    res.send(produto) //responde pra requisição, o json do produto
})

app.delete('/produtos/:id', (req,res, next) =>{
    const produto = db.excluirProdutos(req.params.id)
    res.send(produto) //exclui produto
})

app.listen(porta, ()=>{
    console.log(`Server running on port: ${porta}`)
})