function pegarInput() {
let nasc = document.getElementById('data').value
let resultado = calcularIdade(idade)
document.getElementById('idade').innerText = `Você tem ${idade} anos de idade`;
}


function calcular(idade){
  const ano_atual = new Date();
  const ano_nascimento = new Date(nasc);
  const idade = ano_atual.getFullYear() - ano_nascimento.getFullYear();
  const mes_nascimento = today.getMonth() - ano_nascimento.getMonth();

  if (mes_nascimento < 0 || (mes_nascimento === 0 && ano_atual.getDate() < ano_nascimento.getDate())) {
    idade--;
   
  }

  return idade
}