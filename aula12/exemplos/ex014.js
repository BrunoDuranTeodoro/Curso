
var agora = new Date()
var hora = agora.getHours()


console.log(`São exatamente ${hora} horas`)

if (hora <= 12 && hora >= 5){
    console.log('É manha')
} else if (hora >= 12 && hora <= 17){
    console.log('É tarde')
} else if (hora >= 18 && hora <= 23){
    console.log('É noite')
} else {
    console.log('É madrugada')
}