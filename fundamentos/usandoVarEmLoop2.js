const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]() // 10 em ambas as chamadas, pois var não respeita escopo de funçao
funcs[8]()