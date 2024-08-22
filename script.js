const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
      enunciado:
        "Como é chamada a defesa de linha do campo?",
      alternativas: [
        {
          texto: "Zagueiro!",
          afirmacao: "afirmação",
        },
        {
          texto: "Goleiro!",
          afirmacao: "afirmação",
        },
      ],
    },
    {
      enunciado:
        "Como se chama azul em inglês?",
      alternativas: [
        {
          texto:
            "Blue.",
          afirmacao: "afirmação",
        },
        {
          texto:
            "Red.",
          afirmacao: "afirmação",
        },
      ],
    },
    {
      enunciado:
        "Qual a vaca mais leiteira entre as alternativas abaixo?",
      alternativas: [
        {
          texto:
            "Holandeza.",
          afirmacao: "afirmação",
        },
        {
          texto:
            "Nelore.",
          afirmacao: "afirmação",
        },
      ],
    },
    {
      enunciado:
        "Quantas havan existem no Brasil?",
      alternativas: [
        {
          texto:
            "175.",
          afirmacao: "afirmação",
        },
        {
          texto: "207.",
          afirmacao: "afirmação",
        },
      ],
    },
    {
      enunciado:
        "Quem canta a musica haja colirio? ",
      alternativas: [
        {
          texto:
            "Jads & Jadson.",
          afirmacao: "afirmação",
        },
        {
          texto:
            "Guilherme & Benuto.",
          afirmacao: "afirmação",
        },
      ],
    },
  ];
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa.texto;
      botaoAlternativas.addEventListener("click", function () {
        atual++;
        mostraPergunta();
      });
      caixaAlternativas.appendChild(botaoAlternativas);
    }
  }
  
mostraPergunta();


