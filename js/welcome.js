

const welcomeContainer = document.querySelector('.container-welcome')
const welcomeTextContainer = document.querySelector('.container-welcome-text')
const navbar = document.querySelector('.fa-bars')

welcomeContainer.style.width = '100%' 
welcomeContainer.style.height = '100vh'
welcomeContainer.style.position = 'fixed'
navbar.style.display = 'none'

function slideAnimation(){
    setTimeout(() => {welcomeTextContainer.innerHTML += 'W'}, (1000))
    setTimeout(() => {welcomeTextContainer.innerHTML += 'e'}, (1250))
    setTimeout(() => {welcomeTextContainer.innerHTML += 'l'}, (1500))
    setTimeout(() => {welcomeTextContainer.innerHTML += 'c'}, (1750))
    setTimeout(() => {welcomeTextContainer.innerHTML += 'o'}, (2000))
    setTimeout(() => {welcomeTextContainer.innerHTML += 'm'}, (2250))
    setTimeout(() => {welcomeTextContainer.innerHTML += 'e'}, (2500))
    setTimeout(() => {welcomeTextContainer.innerHTML += ' '}, (2600))
    setTimeout(() => {welcomeTextContainer.innerHTML += 'o'}, (3000))
    setTimeout(() => {welcomeTextContainer.innerHTML += 'n'}, (3250))
    setTimeout(() => {welcomeTextContainer.innerHTML += ' '}, (3500))
    setTimeout(() => {welcomeTextContainer.innerHTML += 'G'}, (4000))
    setTimeout(() => {welcomeTextContainer.innerHTML += 'K'}, (4250))
    setTimeout(() => {welcomeTextContainer.innerHTML += 'L'}, (4500))
    setTimeout(() => {welcomeContainer.style.transform = 'translateY(-100%)'}, (5000))
    setTimeout(() => {navbar.style.display = 'block'}, (7000))
}

slideAnimation()