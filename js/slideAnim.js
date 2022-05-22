const welcomeContainer = document.querySelector('.container-welcome')
const welcomeTextContainer = document.querySelector('.container-welcome-text')
const navbar = document.querySelector('.fa-bars')
const underlineAnimation = document.querySelector('.container-welcome-text-underline')

welcomeContainer.style.width = '100%' 
welcomeContainer.style.height = '100vh'
welcomeContainer.style.position = 'fixed'
navbar.style.visibility = 'hidden'

function slideAnimation(){
    setTimeout(() => {underlineAnimation.style.animation = 'none'}, (1000))
    setTimeout(() => {welcomeTextContainer.innerHTML += 'W'}, (1000))
    setTimeout(() => {welcomeTextContainer.innerHTML += 'e'}, (1200))
    setTimeout(() => {welcomeTextContainer.innerHTML += 'l'}, (1400))
    setTimeout(() => {welcomeTextContainer.innerHTML += 'c'}, (1600))
    setTimeout(() => {welcomeTextContainer.innerHTML += 'o'}, (1800))
    setTimeout(() => {welcomeTextContainer.innerHTML += 'm'}, (2000))
    setTimeout(() => {welcomeTextContainer.innerHTML += 'e'}, (2200))
    setTimeout(() => {underlineAnimation.style.animation = 'welcomeTextTyping 1s infinite'}, (2100))
    setTimeout(() => {welcomeContainer.style.transform = 'translateY(-100%)'}, (2900))
    setTimeout(() => {navbar.style.visibility = 'visible'}, (4200))
}

slideAnimation()