function verificar(){
    var ano = new Date()
    var anoatual = ano.getFullYear()
    var anoinformado = document.getElementById(`datanasc`)
    var res = document.getElementById(`res`)
    var foto = document.getElementById(`foto`)
    if(anoinformado.value.length == 0 || anoinformado.value > anoatual){
        window.alert("[ERRO] verifique os dados e tente novamente")
    }

    else{
        var sexo = document.getElementsByName("radsex")
        var idade = anoatual - Number(anoinformado.value)
        var genero = ""
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `imagem`)
        var foto = document.getElementById(`foto`)
        
        
        if(sexo[0].checked){
            genero = "Homem"
           
            if(idade>=0 && idade<=15){
                img.setAttribute(`src`,`fotocriançahomem.jpg`)
            }

            else if(idade<21){
                img.setAttribute(`src`,`fotojovemhomem.jpg`)
            }

            else if(idade<50){
                img.setAttribute(`src`,`fotoadultohomem.jpg`)
            }

            else{
                img.setAttribute(`src`,`fotoidosohomem.jpg`)
            }

        }

        else {
            genero = "Mulher"

            if(idade>=0 && idade<=15){
                img.setAttribute(`src`,`fotocriançamulher.jpg`)
            }

            else if(idade<21){
                img.setAttribute(`src`,`fotojovemmulher.jpg`)
            }

            else if(idade<50){
                img.setAttribute(`src`,`fotoadultomulher.jpg`)
            }

            else{
                img.setAttribute(`src`,`fotoidosomulher.jpg`)
            }
        }

        
    }
    
    res.style.textAlign = "center"
    res.innerText = `${genero} de ${idade} anos`
    foto.innerHTML = ''
    foto.style.textAlign = "center"
    foto.appendChild(img)
    

}