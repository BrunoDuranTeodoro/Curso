    function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passos = document.getElementById('txtp')

    if(inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        window.alert('[ERRO] INSIRA OS DADOS NOVAMENTE!')
    }else{
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        if (i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} `
                
            }
        }else{
            for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c} `
            
        }
    }
    }
    }