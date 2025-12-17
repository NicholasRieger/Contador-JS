let display = document.querySelector('.display');
let btnAumentar = document.querySelector('.aumentar')
let btnDiminuir = document.querySelector('.diminuir')
let contador = 0;

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('aumentar')){
        contador++
        display.innerText = contador
    }
    if(el.classList.contains('diminuir')){
        contador--
        display.innerText = contador
    }

    if(display.innerText < 0){
        display.classList.add('negativo')
    }else{
        display.classList.remove('negativo')
    }
})





