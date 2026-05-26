const quizData=[
    {
      question : "how old is arun?",
      a: "18",
      b: "19",
      c: "20",
      d: "17",
      correct:" a",
    },
    {
        question : "what is most used programming language?",
        a:"python",
        b:"javascript",
        c:"C++",
        d:"java",
        correct:"b",
    },
    {
        question : "who is the president of india",
        a:"edapadi palanisami",
        b:"mk stalin",
        c:"seeman",
        d:"narendra modi",
        correct:"d",
},
{
    question:"what does HTML stands for",
    a:"hyper text markup language",
    b:" cascading stylesheet ",
    c:"jason",
    d:"apllication programing language",
    correct:"a"
},
{
    question : "what year was javascript invented",
    a:"1995",
    b:"1996",
    c:"1999",
    d:"2000",
    correct:"a"
},


]
const answerEls=  document.querySelectorAll('.answer');
 const quiz=  document.getElementById('quiz');
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn= document.getElementById('submit')
let currentQuiz = 0;
let score= 0;

loadQuiz();
  
function loadQuiz(){
    deselectanswer();
    const currentQuizData = quizData [currentQuiz]
    questionEl.innerHTML= currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}
function getSelected() {
    // Remove this line
    // const answerEls = document.querySelectorAll('.answer');
    let answer = undefined;
 
    answerEls.forEach((answerEl) => {
       if (answerEl.checked) {
          answer = answerEl.id;
       }
    });
    return answer;
 }
 
 
 
    function deselectanswer(){
    
    answerEls.forEach((answerEl) => {
     answerEl.checked = false;
        
         
    });

}


submitBtn.addEventListener('click', () => {
    
    const answer = getSelected();
    
    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
    
        } else{
             quiz.innerHTML = `<h2> you answered correctly at ${score} /${quizData.length} question.</h2> <button onclick = "location.reload()">Reload</button>`

    }

    }
   
    
}
)

