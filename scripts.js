const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelectorAll('.numbers')
const list = document.querySelectorAll('.list') 


let active = 0;
const total = items.length
let timer;


function update(direction){

    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')

}





prevButton.addEventListener('click', ()=>{
    update(-1)
})

nextButton.addEventListener('click', () => {
    update(+1)
})