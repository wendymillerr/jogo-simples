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

    if(pipePosition <= 81){
        pipe.style.animation = 'none';
        pipe.style.left = '81px';
        console.log(pipe.style.left)
    }
}, 10)

document.addEventListener('keydown', jump)