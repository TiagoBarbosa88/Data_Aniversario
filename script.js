function pegarInput() {
    let nasc = document.getElementById("data").value;
    let idade = calcular(nasc);

    document.getElementById("idade").value =
        `Você tem ${idade} anos de idade`;
}


function calcular(nasc) {
    const ano_atual = new Date();
    const ano_nascimento = new Date(nasc);
    let idade = ano_atual.getFullYear() - ano_nascimento.getFullYear();

    const diferencaMes =
        ano_atual.getMonth() - ano_nascimento.getMonth();

    if (
        diferencaMes < 0 ||
        (diferencaMes === 0 &&
            ano_atual.getDate() < ano_nascimento.getDate())
    ) {
        idade--;
    }

    return idade;
}