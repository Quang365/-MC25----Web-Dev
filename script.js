let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let box = document.querySelector('.box');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

// document.querySelector('.scroll a').addEventListener('click', function(e) {
//     e.preventDefault();
//     const target = document.querySelector('#about');
//     target.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//     });
// });

document.querySelector('.banner').addEventListener('click', function() {
    document.querySelector('.slider').classList.toggle('stop');
});