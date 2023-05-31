const question = document.querySelector('.question')
const conteudo = document.querySelector('.conteudo')
const quantidade = document.querySelector('.quantidade')
const btnReiniciar = document.querySelector('.btnreiniciar')
const conteudoFinish = document.querySelector('.finish')
const textoFinish = document.querySelector('.finish span')
const respostas = document.querySelector('.respostas')
const titulo = document.querySelector(".titulo");



let currentIndex = 0;
let marcel = 0;
let lucas = 0;
let richard = 0;
let gabrieli = 0;
let maicon = 0;
let yuri = 0;
let kaua = 0;
let harumi = 0;
let masao = 0;
let francieli = 0;


btnReiniciar.addEventListener('click', function () {
    conteudo.style.display = "flex";
    conteudoFinish.style.display = "none";
    currentIndex = 0;
    marcel = 0;
    lucas = 0;
    richard = 0;
    gabrieli = 0;
    maicon = 0;
    yuri = 0;
    kaua = 0;
    harumi = 0;
    masao = 0;
    francieli = 0;
    titulo.innerHTML = `Quem eras quem serei. 2.0`
    loadQuestion();
} )



const questions = [
    {
        question: "No valorante você é quem?",
        respostas: [
            { option: "O que joga muito", correct: "marcel" },
            { option: "jogo nada mais penso que jogo", correct: "lucas"},
            { option: "jogo na minha como eu queria ", correct: "richard"},
            { option: "que jogo é esse ? ", correct: "gabrieli"},
            { option: "tanto faz tanto fez ", correct: "kaua"},
        ],
    },
    {
        question: "Qual o jogo que você menos gosta?",
        respostas: [
            { option: "aquele que não posso xingar alguem", correct:"yuri" },
            { option: "pega pega no recrio da escola", correct:"harumi" },
            { option: "minecraft", correct:"maicon" },
            { option: "zelda", correct:"masao" },
            { option: "gosto de tudo que é merda", correct:"francieli" },
        ],
    },

    {
        question: "No grupo você é quem ?",
        respostas: [
            { option: "o que aparece pra mandar o link da stream", correct: "marcel" },
            { option: "apareço pra arranjar treta", correct: "lucas"},
            { option: "aquele que só fala o básico", correct: "richard"},
            { option: "apareço pra dar umas risada e mandar foto de gato de vez em quando", correct: "gabrieli"},
            { option: "o que não gosta de patifação", correct: "kaua"},
        ],
    },

    {
        question: "porque eu to no grupo?",
        respostas: [
            { option: "porque eu criei", correct:"yuri" },
            { option: "fazendo um intercambio de vida adulta", correct:"harumi" },
            { option: "espalhar a benção do senhor", correct:"maicon" },
            { option: "nem eu sei mano", correct:"masao" },
            { option: "pra compartilhar uns videos nada haver", correct:"francieli" },
        ],    
    },

    {
        question: "uma frase que me define ?",
        respostas: [
            { option: "me segue na twitch", correct: "marcel" },
            { option: "errar aprendendo errando com os outros", correct: "lucas"},
            { option: "falo nada só observo", correct: "richard"},
            { option: "nem sei porque eu to aqui", correct: "gabrieli"},
            { option: "patifou", correct: "kaua"},
        ],
    },


    {
        question: "1000 pila no bolso o que tu faz ?",
        respostas: [
            { option: "compro uma cadeira gamer", correct:"yuri" },
            { option: "compro uma boneca de brinquedo", correct:"harumi" },
            { option: "compro um volante no aliexpress pra jogar com meu amigo Richard", correct:"maicon" },
            { option: "comprar um zeldinha ?", correct:"masao" },
            { option: "vou viajar pro sul", correct:"francieli" },
        ],
  
    },

    {
        question: "tuas ultimas 24h de vida o que tu faz ?",
        respostas: [
            { option: "vou fazer uma stream", correct: "marcel" },
            { option: "vou xingar o maicon", correct: "lucas"},
            { option: "eu me demito do meu trabalho", correct: "richard"},
            { option: "vou lá arranja trabalho pros meus colegas de trabalho", correct: "gabrieli"},
            { option: "mando uma foto da minha meia", correct: "kaua"},
        ],
    },

    {
        question: "posso mandar só mais um vídeo no grupo, que video eu mando ?",
        respostas: [
            { option: "mostrando eu pintando meu tenis de rosa", correct:"yuri" },
            { option: "mostrando a escola que eu estudo", correct:"harumi" },
            { option: "um video de promocoes na terabyte", correct:"maicon" },
            { option: "uma gameplay de zelda", correct:"masao" },
            { option: "mostrando a decoração aqui de casa", correct:"francieli" },
        ],
  
    },

  
        ];


btnReiniciar.onclick = () => {
    conteudo.style.display = "flex";
    conteudoFinish.style.display = "none";
}

function nextQuestion (e) {

    if (e.target.getAttribute("data-correct") === "marcel") {
      marcel++;
       
      }

   else if (e.target.getAttribute("data-correct") === "maicon") {
        maicon++;
          
      }
     else if (e.target.getAttribute("data-correct") === "yuri") {
        yuri++; 
         
      }
    else  if (e.target.getAttribute("data-correct") === "richard") {
        richard++;  
        
      }
     else if (e.target.getAttribute("data-correct") === "gabrieli") {
        gabrieli++;  
        

      }
    else  if (e.target.getAttribute("data-correct") === "masao") {
        masao++; 
        
      }
    else  if (e.target.getAttribute("data-correct") === "kaua") {
        kaua++;  
        
      }
    else  if (e.target.getAttribute("data-correct") === "lucas") {
        lucas++;
         
      }
       


    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        finish();
    }
}

console.log(textoFinish);

function finish () {
    if (marcel >= 3) {
        titulo.innerHTML = "Você tirou o Marcel"
    }

   else if (maicon >= 3 ) {
        titulo.innerHTML = "Você tirou o Maicon"
    }

    else if (lucas >= 3 ) {
        titulo.innerHTML = "Você tirou o Lucas"
    }

    else if (yuri >= 3 ) {
        titulo.innerHTML = "Você tirou o Yuri"
    }

    else if (kaua >= 3) {
        titulo.innerHTML = "Você tirou o Kaua"
    }

    else if (gabrieli >= 3) {
        titulo.innerHTML = "Você tirou a Gabrieli"
    }

    else if (richard >= 3) {
        titulo.innerHTML = "Você tirou o Richard"
    }

    else if (harumi >= 3) {
        titulo.innerHTML = "Você tirou a Harumi"
    }

    else if (francieli >= 3) {
        titulo.innerHTML = "Você tirou a Francieli"
    }
    else if (masao >= 3) {
        titulo.innerHTML = "Você tirou a Masao"
    }
    else {
      const nome = ["yuri", "maicon", "lucas" ]  
      let nomeRandom = nome[Math.floor(Math.random() * 3)]
      return titulo.innerHTML = `Você tirou ${nomeRandom}`;
      
    }

    
}


function loadQuestion () {

    quantidade.innerHTML = `${currentIndex + 1}/ ${questions.length}`;
    const item =questions [currentIndex];
    respostas.innerHTML = "";
    question.innerHTML = item.question;

    item.respostas.forEach((resposta) => {
        const div = document.createElement('div');
        
    div.innerHTML = `
    <button class="resposta" data-correct = "${resposta.correct}">
    ${resposta.option}
    </button>
    `
    respostas.appendChild(div);
    });

    document.querySelectorAll(".resposta").forEach((item) => {
        item.addEventListener('click', nextQuestion);
    })
}

loadQuestion()
