const stbtn=document.querySelector('.start-btn');
const popupinfo=document.querySelector('.popup-info');
const exitbtn=document.querySelector('.exit-btn');
const main=document.querySelector('.main');
const continuebtn=document.querySelector('.continue-btn');
const quizSection=document.querySelector('.quiz-section');
const quizBox=document.querySelector('.Quiz-box');
const resultBox=document.querySelector('.result-box');
const tryAgainBtn=document.querySelector('.try-again-btn');
const goHomeBtn=document.querySelector('.goHome-btn');


stbtn.onclick=()=>{
    popupinfo.classList.add('active');
    main.classList.add('active');
}

exitbtn.onclick=()=>{
    popupinfo.classList.remove('active');
    main.classList.remove('active');
}

continuebtn.onclick=()=>{
    quizSection.classList.add('active');
    popupinfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active')

    showQuestions(0);
    questionCounter(1);
    headerScore();
}

tryAgainBtn.onclick=()=>{
    quizBox.classList.add('active');
    nextbtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount=0;
    questionNumb=1;
    userscore=0;
    showQuestions(questionCount);
    questionCounter(questionNumb);

    headerScore();
}

goHomeBtn.onclick=()=>{
    quizSection.classList.remove('active');
    nextbtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount=0;
    questionNumb=1;
    userscore=0;
    showQuestions(questionCount);
    questionCounter(questionNumb);

    headerScore();
}

let questionCount=0;
let questionNumb=1;
let userscore=0;

const nextbtn=document.querySelector('.next-btn');

nextbtn.onclick=()=>{
    if(questionCount<questions.length-1){
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);

        nextbtn.classList.remove('active');
    }
    else{
        // console.log("questions Completed");
        showResultBox();
    }
}

const optionList=document.querySelector('.option-list');

function showQuestions(index){
    const questionText=document.querySelector('.question-text');
    questionText.textContent=`${questions[index].numb} ${questions[index].question}`;

    let optionTag=`<div class="option"><span>${questions[index].options[0]}</span></div>
                    <div class="option"><span>${questions[index].options[1]}</span></div>
                    <div class="option"><span>${questions[index].options[2]}</span></div>
                    <div class="option"><span>${questions[index].options[3]}</span></div>`;
    
    optionList.innerHTML=optionTag;

    const option=document.querySelectorAll('.option');
    for(let i=0;i<option.length;i++){
        option[i].setAttribute('onclick','optionSelected(this)');
    }
}

function optionSelected(answer){
    let userAnswer=answer.textContent;
    let correctAnswer=questions[questionCount].answer;
    let allOptions=optionList.children.length;

    if(userAnswer==correctAnswer){
        answer.classList.add('correct');
        userscore+=1;
        headerScore();
    }
    else{
        answer.classList.add('incorrect');
        //if answer is incorrect then mark correct automatically
        for(let i=0;i<allOptions;i++){
            if(optionList.children[i].textContent==correctAnswer){
                optionList.children[i].setAttribute('class','option correct');
            }
        }
    }
    //if all options selected
    for(let i=0;i<allOptions;i++){
        optionList.children[i].classList.add('disabled');
    }

    nextbtn.classList.add('active');
}
function questionCounter(index){
    const questionTotal=document.querySelector('.question-total');
    questionTotal.textContent=`${index} of ${questions.length} Questions`;
}

function headerScore(){
    const headerScoreText=document.querySelector('.header-score');
    headerScoreText.textContent=`Score: ${userscore}/${questions.length}`;

}

function showResultBox(){
    quizBox.classList.remove('active');
    resultBox.classList.add('active');
    
    const scoreText=document.querySelector('.score-text')
    scoreText.textContent=`Your Score ${userscore} out of ${questions.length}`;

    const circularprogress=document.querySelector('.circular-progress');
    const progressValue=document.querySelector('.progress-value');

    let progressStartValue=-1;
    let progressEndValue=(userscore/questions.length)*100;
    let speed=20;

    let progress=setInterval(()=>{
        progressStartValue++;
        progressValue.textContent=`${progressStartValue}%`;
        circularprogress.style.background=`conic-gradient(#00008b ${progressStartValue * 3.6}deg,rgba(255,255,255,.1) 0deg)`;
        if(progressStartValue==progressEndValue){
            clearInterval(progress);
        }
    },speed);


}