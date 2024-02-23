const stbtn=document.querySelector('.start-btn');
const popupinfo=document.querySelector('.popup-info');
const exitbtn=document.querySelector('.exit-btn');
const main=document.querySelector('.main');

stbtn.onclick=()=>{
    popupinfo.classList.add('active');
    main.classList.add('active');
}

exitbtn.onclick=()=>{
    popupinfo.classList.remove('active');
    main.classList.remove('active');
}