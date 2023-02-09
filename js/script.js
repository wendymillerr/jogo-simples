const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); /*pega o estilo que foi computado e passa qualquer elemento que quer pegar. o + transforma em número*/ 

    if(pipePosition <= 75  && pipePosition > 0 && marioPosition < 50){
        pipe.style.animation = 'none';
        pipe.style.left = '75px';
        

        mario.style.animation = 'none'
        mario.style.bottom = '49px'
        mario.src = './images/game-over.png'
        mario.style.width = '50px'

        clearInterval(loop)
    }
}, 10)

document.addEventListener('keydown', jump)