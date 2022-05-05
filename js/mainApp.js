// Welcome Animation

const welcomeAnimPic = document.querySelector('.picture')
const welcomeAnimPres = document.querySelector('.presentation')
const logo = document.querySelector('#logo')

welcomeAnimPic.style.width = '100%'
welcomeAnimPic.style.height = '100vh'

function slideAnimation(){
    setTimeout(() => {welcomeAnimPic.style.animation = 'slideWelcomePage 3s'}, (1500))
    setTimeout(() => {welcomeAnimPres.style.display = 'flex'}, (4500))
    setTimeout(() => {welcomeAnimPic.style.width = ''}, (4500))
    setTimeout(() => {welcomeAnimPic.style.height = ''}, (4500))
}

slideAnimation()