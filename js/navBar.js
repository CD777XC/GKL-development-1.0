const displayBtn = document.querySelector('.fa-bars')
const navOverlay = document.querySelector('.overlayNav')

overlay = false

// Open and close

displayBtn.addEventListener('click', function(){
    if (overlay === false){
        displayBtn.style.rotate = '90deg'
        navOverlay.style.transform = 'translateY(0%)'
        overlay = !overlay
    } else if (overlay){
        displayBtn.style.rotate = ''
        navOverlay.style.transform = 'translateY(-100%)'
        overlay = false
    }
})

