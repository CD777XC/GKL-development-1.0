// Welcome Animation

const welcomeAnimPic = document.querySelector('.picture')
const welcomeAnimPres = document.querySelector('.presentation')

function slideAnimation(){
    setTimeout(() => {welcomeAnimPic.style.animation = 'slideWelcomePage 3s'}, (1500))
    setTimeout(() => {welcomeAnimPres.style.display = 'block'}, (4500))
    setTimeout(() => {welcomeAnimPic.style.width = '30%'}, (4500))
}

slideAnimation()