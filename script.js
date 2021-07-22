const quizData = [
    {
        question: "Nejvyšší hora ČR",
        a: 'Praděd',
        b: 'Javorníky',
        c: 'Sněžka',
        d: 'Lysá hora',
        corect: 'c'
    }, 
    {
        question: "Kolik šálků kávy vypije průměrný Čech za rok?",
        a: '120',
        b: '380',
        c: '760',
        d: '820',
        corect: 'b'
    }, 
    {
        question: "Co psi nesmí jíst?",
        a: 'Čokoládu',
        b: 'Mrkev',
        c: 'Rohlík',
        d: 'Tvarůžky',
        corect: 'a' 
    }, 
    {
        question: "Jak dlouho v průměru žijí červené krvinky?",
        a: '14 dnů',
        b: '1 - 2 měsíce',
        c: '100 - 120 dní',
        d: 'Po celý život',
        corect: 'c'    
    },
    {
        question: "Vrcholně gotický hrad, založený ve 14. století Karlem IV. jako pevnost a rezidence",
        a: 'Karlštejn',
        b: 'Perštejn',
        c: 'Landštejn',
        d: 'Hoštejn',
        corect: 'a'     
    }, 
    {
        question: "Která stránka mezi ostatní nepatří?",
        a: 'skod.cz',
        b: 'aukro.cz',
        c: 'sbazar.cz',
        d: 'bazos.cz',
        corect: 'a'    
    }, 
    {
        question: "Co se dělalo na „magiči“?",
        a: 'kouzelné triky',
        b: 'poslouchala hudba',
        c: 'otáčením se sledovali barevné obrazce',
        d: 'skákalo přes něj',
        corect: 'b'    
    }, 
    {
        question: "Oblíbená plyšová hračka 80.let minulého století byla",
        a: 'mončičák',
        b: 'myšák',
        c: 'kočičák',
        d: 'ovečka',
        corect: 'a'    
    },
    {
        question: "Co byla hračka s názvem Klik-klak?",
        a: 'hřevěná hračka vydávající zvuk',
        b: 'dvě kuličky na provázku',
        c: 'dvě dřevěné kostky s potiskem (puzzle)',
        d: 'skládací dřevěná hra',
        corect: 'b'     
    }, 
    {
        question: "V roce 1984 naplno propuklo šílenství zvané Céčka. Víte, kdo je dodával na trh?",
        a: 'státní podnik Klenoty',
        b: 'jablonecká Bižuterie',
        c: 'dovozce plastů Ferona',
        d: 'národní podnik Mesit',
        corect: 'b'    
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Odpověděl/a si  ${score}/${quizData.length} otázek.</h2>
                
                <button onclick="location.reload()">Načíst znova</button>
            `;
        }
    }
});
