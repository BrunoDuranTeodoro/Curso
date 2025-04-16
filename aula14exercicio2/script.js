function Verificar(){
    let tab = document.getElementById('txtn')
    let res = document.getElementById('res')

    if(tab.value.length == 0 || tab.value.length == ''){
        res.innerHTML = '[ERRO] ENVIE O NUMERO NOVAMENTE'
    }if(tab.value.length >=1){
        let i = Number(tab.value)
        let c = 1

        res.innerHTML = ''

        while (c < 10){
            let item = document.createElement('option')
            item.text = `${i} x ${c} = ${i*c}`
            res.appendChild(item)
            c++
        }
    }

}
