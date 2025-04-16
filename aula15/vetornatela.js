/*
console.log(valores)
                            Metodo bosta
console.log(valores[0])
*/

/*
for(let teste=0; teste < duda.length; teste++){
    console.log(`A varredura da duda na posição ${teste} tem os valores ${duda[teste]}`)
}
*/



let valores = [8,1,7,4,2,9]
let duda = [17,28,48,58]
duda.sort()
valores.sort()

console.log(`O numero do index OF é ${duda.indexOf(48)}`)

duda.indexOf(48)
let indexof = duda.indexOf(48)

if(indexof == 2){
    console.log(`Esse numero existe e está na posição ${indexof}`)
    console.log(`existem esses vetores ainda ${duda}`)
}else{
    console.log(`Digite um numero existente`)
}

for(let teste in duda){
    console.log(duda[teste])
}

for(let pos=0; pos < valores.length; pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}

