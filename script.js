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
}