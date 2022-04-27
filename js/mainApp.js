// Welcome Animation

const welcomeAnimPic = document.querySelector('.picture')
const welcomeAnimPres = document.querySelector('.presentation')

function slideAnimation(){
    setTimeout(() => {welcomeAnimPic.style.animation = 'slideWelcomePage 2s'}, (1000))
    setTimeout(() => {welcomeAnimPres.style.display = 'block'}, (3000))
    // setTimeout(() => {welcomeAnimPres.style.opacity = '0.1'}, (3100))
    setTimeout(() => {welcomeAnimPic.style.width = '30%'}, (3000))
}

slideAnimation()

// 