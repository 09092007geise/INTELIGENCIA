const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Como é chamada a defesa de linha do campo?",
        alternativas: [
            "Zagueiros",
            "Goleiros"
        ]
    },
    {
        enunciado: "Como se chama azul em inglês?",
        alternativas: [
            "Blue",
            "Red"
        ]
    },
    {
        enunciado: "Qual a vaca mais leiteira em relacao as alternativas?",
        alternativas: [
            "Holandeza",
            "Nelore"
        ]
    },
    {
        enunciado: "Quantas havan existem no Brasil?",
        alternativas: [
            "175",
            "207"
        ]
    },
    {
        enunciado: "Quem canta a musica haja colirio?",
        alternativas: [
            "Jads & Jadson",
            "Guilherme & Benuto"
        ]
    }
]; 

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta()
