const btnMode = document.getElementById('btnMode');
const modeImg = document.getElementById('modeImg');
const navBar = document.getElementById('navBar');
let themeMode = 'dark';

btnMode.addEventListener('click', ()=>{
    if(themeMode == 'dark'){
        themeMode = 'light';
        document.documentElement.style.setProperty('--primary', '#e5e5e5');
        document.documentElement.style.setProperty('--secondary', '#27272a');
        document.documentElement.style.setProperty('--shadow', '#b9b9b9');
        //Nav
        modeImg.src = 'img/moon.svg';
        navBar.classList.add('navbar-light')
        navBar.classList.remove('navbar-dark')
    }else{
        themeMode = 'dark';
        document.documentElement.style.setProperty('--primary', '#27272a');
        document.documentElement.style.setProperty('--secondary', '#e5e5e5');
        document.documentElement.style.setProperty('--shadow', '#212121');
        //Nav
        modeImg.src = 'img/sun.svg';
        navBar.classList.add('navbar-dark')
        navBar.classList.remove('navbar-light')
    }
})


