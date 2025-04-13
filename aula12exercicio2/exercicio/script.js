function verificar(){
   var data = new Date()
   var ano = data.getFullYear() // para pegar com 4 digitos
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')


   if(fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!') //FAZ UMA VALIDAÇÃO PRIMEIRO
   }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value) //PEGA O ANO - O TEXT QUE FOI INSERIDO (LEMBRAR DE TRANSFORMAR EM NUMBER)

    var genero = '' // DECLARA UMA VARIAVEL GENERO VAZIA

    var img = document.createElement('img') //CRIA UMA IMAGEM SEM PRECISAR DO HTML
    img.setAttribute('id', 'foto') //ATRIBUI ID FOTO NELA

    if(fsex[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade <= 10){
            //CRIANÇA
            img.setAttribute('src', '../imagens/foto-bebe-m.png')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', '../imagens/foto-jovem-m.png')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', '../imagens/foto-adulto-m.png')
        }else{
            //idoso
            img.setAttribute('src', '../imagens/foto-idoso-m.png')
        }
    }else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade <= 10){
            img.setAttribute('src', '../imagens/foto-bebe-f.png')
            //CRIANÇA
        } else if (idade < 21){
            img.setAttribute('src', '../imagens/foto-jovem-f.png')
            //jovem
        } else if (idade < 50){
            img.setAttribute('src', '../imagens/foto-adulto-f.png')
            //adulto
        }else{
            img.setAttribute('src', '../imagens/foto-idoso-f.png')
            //idoso
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
   }
}