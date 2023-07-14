function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Now it's ${hora} o'clock.`
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = './imgs/manha.png'
        document.body.style.backgroundColor = '#eabf60'
    } else if (hora >= 12 && hora <18){
        //boa tarde
        img.src = './imgs/tarde.png'
        document.body.style.backgroundColor = '#608385'
    } else {
        //boa noite
        img.src = './imgs/noite.png'
        document.body.style.backgroundColor = '#02314b'
    }
}

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERROR] Check the data and try again!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            gênero = 'Male'
            if (idade < 2){
                img.setAttribute('src', './img/bebes.png')
            } else if (idade < 12){
                img.setAttribute('src', './img/adolecentes.png')
            } else if (idade <= 19){
                img.setAttribute('src', './img/criancas.png')
            } else if (idade > 20 && idade <=30){
                img.setAttribute('src', './img/jovens.png')
            } else if (idade > 50){
                img.setAttribute('src', './img/idoses.png')
            }
        } else if (fsex[1].checked){
            gênero = 'Female'

        } else if (fsex[2].checked){
            gênero = 'Non-binary '

        }
        res.innerHTML = `We detect an ${idade} years old ${gênero}.`
        res.appendChild(img)
    } 
}

