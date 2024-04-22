const botaoEnviar = document.querySelectorAll('#botao')
const inputUm = document.querySelectorAll('.form-1')
const inputDois = document.querySelectorAll('.form-2')
const inputTres = document.querySelectorAll('.form-3')
const inputQuatro = document.querySelectorAll('.form-4')


let errorUm = document.querySelectorAll('.error-1')
let errorDois = document.querySelectorAll('.error-2')
let errorTres = document.querySelectorAll('.error-3')
let errorQuatro = document.querySelectorAll('.error-4')

botaoEnviar[0].addEventListener('click', (event) => {
    event.preventDefault();

    // campo um
    let valorInputUm = inputUm[0].value.trim()
    if(valorInputUm === ''){
        errorUm[0].classList.remove('none')
        inputUm[0].classList.remove('borda-verde')
        errorUm[0].classList.add('block')
        inputUm[0].classList.add('borda-vermelha')

        
    }else{
        errorUm[0].classList.add('none')
        inputUm[0].classList.add('borda-verde')
        errorUm[0].classList.remove('block')
        inputUm[0].classList.remove('borda-vermelha')
    }

    // campo dois
    let valorInputDois = inputDois[0].value.trim()
    if(valorInputDois === ''){
        errorDois[0].classList.remove('none')
        inputDois[0].classList.remove('borda-verde')
        errorDois[0].classList.add('block')
        inputDois[0].classList.add('borda-vermelha')
        
    }else{
        errorDois[0].classList.add('none')
        inputDois[0].classList.add('borda-verde')
        errorDois[0].classList.remove('block')
        inputDois[0].classList.remove('borda-vermelha')
    }

    // campo tres
    let valorInputTres = inputTres[0].value.trim()
    if(valorInputTres === ''){
        errorTres[0].classList.remove('none')
        inputTres[0].classList.remove('borda-verde')
        errorTres[0].classList.add('block')
        inputTres[0].classList.add('borda-vermelha')
        
    }else{
        errorTres[0].classList.add('none')
        inputTres[0].classList.add('borda-verde')
        errorTres[0].classList.remove('block')
        inputTres[0].classList.remove('borda-vermelha')
    }

    // campo quatro
    let valorInputQuatro = inputQuatro[0].value.trim()
    if(valorInputQuatro === ''){
        errorQuatro[0].classList.remove('none')
        inputQuatro[0].classList.remove('borda-verde')
        errorQuatro[0].classList.add('block')
        inputQuatro[0].classList.add('borda-vermelha')
        
    }else{
        errorQuatro[0].classList.add('none')
        inputQuatro[0].classList.add('borda-verde')
        errorQuatro[0].classList.remove('block')
        inputQuatro[0].classList.remove('borda-vermelha')
    }
})