const stbtn=document.querySelector('.start-btn');
const popupinfo=document.querySelector('.popup-info');
const exitbtn=document.querySelector('.exit-btn');
const main=document.querySelector('.main');
const continuebtn=document.querySelector('.continue-btn');
const quizSection=document.querySelector('.quiz-section');
const quizBox=document.querySelector('.Quiz-box');


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
}

let questionCount=0;
const nextbtn=document.querySelector('.next-btn');
nextbtn.onclick=()=>{
    questionCount++;
    showQuestions(questionCount);
}

function showQuestions(index){
    const questionText=document.querySelector('.question-text');
    questionText.textContent=`${questions[index].numb} ${questions[index].question}`;
}
