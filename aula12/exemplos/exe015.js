agora =  new Date()
var diaSemana =  agora.getDay()


console.log(diaSemana)

switch(diaSemana){
    case 0:
        console.log('É Domingo')
        break
    case 1:
        console.log('É Segunda')
        break
    case 2: 
        console.log('É Terça')
        break
    case 3:
        console.log('É Quarta')
        break
    case 4:
        console.log('É Quinta')
        break
    case 5:
        console.log('É Sexta')
        break
    case 6:
        console.log('É Sabado')
        break
    default:
        console.log('[ERRO!] Insira um dia válido')
        break
} 