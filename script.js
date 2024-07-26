window.addEventListener('load', () =>{
//Menú
    let menu_btn = document.getElementById('menu-btn');
    let menu = document.getElementById('menu');

    menu_btn.addEventListener('click', () =>{
        menu.classList.toggle('mostrar');
    })
      
})