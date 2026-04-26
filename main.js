let nome = prompt("Digite o seu nome: ")

function saudarUser(nome){

    const apenasLetras = /^[a-zA-ZÀ-ÿ\s]+$/

    while(nome === "" || nome === null || nome.length <= 3 || !apenasLetras.test(nome)){
        alert("Nome insuficiente, nome não informado ou contem numeros")
        nome = prompt("Digite o seu nome novamente: ")

        if (nome === null) break
    }

    if(nome){
        alert(`Olá ${nome}, seja bem-vindo!`)
    }
}

saudarUser(nome)