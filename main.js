let btn=document.getElementById('scr');
window.onscroll=function(){
    if(window.scrollY >= 400){
     btn.style.display='flex';
    }
    else{
   btn.style.display='none';
    }
}
if(btn){
    btn.onclick=function(){
     window.scrollTo({
            top:0,
            behavior:'smooth',
        });
}}

// تفعيل الدارك مود واللايت مود بسلاسة
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    if (themeIcon) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    });
}

let counter=document.querySelector('h1 span');
let word="Build Faster.";
let i=0;
let writing=setInterval(()=>{
    if(counter){
    counter.innerHTML+=word[i];
    i++;
    if(i===word.length){
        clearInterval(writing);
    }}
},100);

let input=document.getElementsByClassName('input');
let message=document.getElementsByClassName('message');

function validate(){
    let valid=true;
   for(let i=0;i<input.length;i++){
    message[i].innerHTML='';
    if(input[i].value.trim() ==''){
        message[i].innerHTML=`${input[i].name} is required`;
        valid=false; 
    }
    else if(input[i].value.trim().split(/\s+/).length<2 && i==0){
         message[i].innerHTML=`${input[i].name} must contain 2 words`;
        valid=false;}
    
    else if(!input[i].value.includes("@gmail.com") && i==1){
         message[i].innerHTML=`${input[i].name} must contain @gmail.com`;
         valid=false;}

        }
        if(valid===true){
            alert("message is submitted successfully");
        }
    }

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.header_links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });
}