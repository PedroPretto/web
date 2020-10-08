const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]() // por let ter escopo de função, o i registra o valor de cada momento
funcs[8]()