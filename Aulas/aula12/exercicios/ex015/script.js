function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            document.body.style.background = '#00a9fa'

            if (idade >= 0 && idade <= 12) {
                // Criança
                img.setAttribute('src', 'bebe-m.webp')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-m.webp')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-m.webp')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-m.webp')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            document.body.style.background = '#f851e6'

            if (idade >= 0 && idade <= 12) {
                // Criança
                img.setAttribute('src', 'bebe-f.webp')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-f.webp')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulta-f.webp')
            } else {
                // Idoso
                img.setAttribute('src', 'idosa-f.webp')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}