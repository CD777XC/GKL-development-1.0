        // DISPLAY NAVBAR

const displayBars = document.querySelector('.fa-bars')
const navOverlay = document.querySelector('.container-navLinks')
const logoOverlay = document.querySelector('.container-logo')

navLinks = false

// Open and close

displayBars.addEventListener('click', function(){
    if (navLinks === false){
        displayBars.style.rotate = '90deg'
        displayBars.style.animation = 'none'
        logoOverlay.style.transform = 'translateX(+100%)'
        navOverlay.style.transform = 'translateX(0%)'
        navLinks = !navLinks
    } else if (navLinks){
        displayBars.style.rotate = ''
        displayBars.style.animation = ''
        navOverlay.style.transform = 'translateX(-100%)'
        logoOverlay.style.transform = 'translateX(0%)'
        navLinks = false
    }
})


        // DISPLAY TEXT ON CONTAINER-BOX-HIDDEN


const arrowOne = document.querySelector('.container-box-arrow-one')
const arrowTwo = document.querySelector('.container-box-arrow-two')
const arrowThree = document.querySelector('.container-box-arrow-three')
const arrowFour = document.querySelector('.container-box-arrow-four')
const containerHidden1 = document.querySelector('.hidden-one')
const containerHidden2 = document.querySelector('.hidden-two')
const containerHidden3 = document.querySelector('.hidden-three')
const containerHidden4 = document.querySelector('.hidden-four')

function hideText(textNum){
    textNum.style.display= 'none'
}

function renderText(hiddenNum, arrowNum){
    if(hiddenNum.style.display === 'none'){
        hiddenNum.style.display = 'block'
        arrowNum.style.rotate = '90deg'
    }
    else if(hiddenNum.style.display === 'block'){
        hiddenNum.style.display = 'none'
        arrowNum.style.rotate = 'none'
    }
}

hideText(containerHidden1)
hideText(containerHidden2)
hideText(containerHidden3)
hideText(containerHidden4)
