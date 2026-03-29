const prevButton = document.getAnimationsbyId('prev');
const nextButton = document.getAnimationsbyId('next');
const items = document.querySelectorAll('.item');
const dost =  document.querySelectorAll('.dot');
const numberintdicator = document.querySelector('.number');
const list = document.querySelector('.list');


let active = 0;
const total = items.length;
let timer;

prevButton.addEventListener('click', function(){
    update()
}