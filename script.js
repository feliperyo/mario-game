const restart = document.querySelector('.restart')

const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
// const cloud = document.querySelector('.cloud')

const jump = () => {
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    // const cloudPosition = cloud.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipePosition <= 220 && pipePosition > 0 && marioPosition < 150) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.src = './assets/game-over.png'
        mario.style.width = '190px'
        mario.style.marginLeft = '60px'

        // cloud.style.animation = 'none'
        // cloud.style.left = `${cloudPosition}px`

        clearInterval(loop)
    }
}, 10)

restart.addEventListener('click', () => {
    location.reload(true)
})

document.addEventListener('keypress', jump)