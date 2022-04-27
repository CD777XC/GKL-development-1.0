const displayBtn = document.querySelector('.fa-bars')
const navOverlay = document.querySelector('.overlayNav')

overlay = false

// Open and close

displayBtn.addEventListener('click', function(){
    if (overlay === false){
        navOverlay.style.display = 'block'
        navOverlay.style.animation = 'openNav 1s'
        overlay = !overlay
    } else if (overlay){
        navOverlay.style.animation = 'openNav 1s reverse'
        navOverlay.style.display = 'none'
        overlay = false
    }
})

