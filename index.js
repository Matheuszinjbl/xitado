const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "Já xitou no dominas.",
  "Não, apenas dupa mochila no porta malas.",
  "Sem dúvidas!",
  "JK já fez exposed.",
  "Não, é legit.",
  "Não, ele(a) só faz dark.",
  "Talvez, creio que tenha modo Streamer.",
  "Melhor não te dizer agora.",
  "Tudo indica que sim, É do exposed!",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "É fechado com a 15",
  "Só dupa em zap",
  "Lógico que não, falta +movi pra ele(a)",
  "Sim.",
  "Sim, usa o mesmo hack que o Piuzinho",
  "Sinais apontam que sim.",
]   

// clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  // gerar numero aletorio
  const  totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;

  // sumir a resposta depois de 3 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}