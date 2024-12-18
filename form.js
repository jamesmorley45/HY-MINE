let title = document.querySelector(".title");
let under = document.querySelector(".underline");
let Username = document.querySelector(".Username");
let signin = document.querySelector(".signinbtn");
let signup = document.querySelector(".signupbtn");
let para = document.querySelector(".p");
let back = document.querySelector(".form-box");
let modesin = document.querySelector(".modesin");
let modesout = document.querySelector(".modesout");


signin.addEventListener('click' , () => {
   Username.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    signup.classList.add('disable');
    signin.classList.remove('disable');
  para.innerHTML = 'Forget Password';
    under.style.transform = 'translateX(35px)';
});

signup.addEventListener('click' , () => {
    Username.style.maxHeight = '60px';
     title.innerHTML = 'Sign Up';
     signin.classList.add('disable');
     signup.classList.remove('disable');
     para.innerHTML = 'Password Suggestion';
     under.style.transform = 'translateX(0px)';
 });

 modesout.addEventListener('click' , () => {
    back.classList.add('dis');
    modein.classList.add('dismode');
    modeout.classList.remove('dismode');
 });
 modesin.addEventListener('click' , () => {
    back.classList.remove('dis');
    modeout.classList.add('dismode');
    modein.classList.remove('dismode');
 })


