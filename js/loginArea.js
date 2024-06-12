function criaLogin(){
    let usu = document.getElementById("log").value
    let pass = document.getElementById("sen").value
    let gma = document.getElementById("ema").value


    localStorage.setItem("user", usu)
    localStorage.setItem("password", pass)
    localStorage.setItem("ema", gma)

    window.location.href="index.html"
} 

function fazerLogin(){
    let usu = document.getElementById("log2").value
    let pass = document.getElementById("sen2").value

    let usuLS = localStorage.getItem("user")
    let passLS = localStorage.getItem("password")

    if(usuLS != "" && passLS != ""){
        if(usu == usuLS && pass == passLS && usu != "" && pass != ""){
            alert("Acesso efetuado com sucesso")
            window.location.href="home.html"
        }else{
            alert("Informações invalidas")
        }
    }else{
        alert("Insira suas informações")
    }
    
}

function recuperaLog(){
    let gma = document.getElementById("ema2").value
    let gmaLS = localStorage.getItem("ema")

    if(gmaLS != ""){
        if(gma == gmaLS){
            alert("Redefinição de conta em progresso!")
            window.location.href="cadasArea.html"
        }else{
            alert("Credencial incorreta")
        }
    }else{
        alert("Insira suas informações")
    }

}