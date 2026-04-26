function saudarUser() {
    const apenasLetras = /^[a-zA-ZÀ-ÿ\s]+$/;
    let nome;

    while (true) {
        nome = prompt("Digite o seu nome:");

        if (nome === null) {
            return;
        }

        nome = nome.trim();

        if (nome.length <= 3) {
            alert("Nome muito curto.");
            continue;
        }

        if (!apenasLetras.test(nome)) {
            alert("O nome deve conter apenas letras.");
            continue;
        }

        break;
    }

    alert(`Olá ${nome}, seja bem-vindo!`);
}

saudarUser();