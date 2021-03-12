const App = () => {
    const slider = document.querySelector('.container')
    const innerSlider = document.querySelector('.slider')

    let pressed = false
    let startX 
    let x


    slider.addEventListener('mousedown', (e) => {
        pressed = true
        startX = e.pageX - innerSlider.offsetLeft
    })
    
    slider.addEventListener('touchstart', (e) => {
        pressed = true
        startX = e.touches[0].clientX - innerSlider.offsetLeft
    })
    
    window.addEventListener('mouseup', () => {
        pressed = false 
    })
    window.addEventListener('touchend', (e) => {
        pressed = false
    })
    
    
    slider.addEventListener('mousemove', (e) => {
        if (!pressed) return;
    
        x = e.pageX
    
        innerSlider.style.left = `${x - startX}px`
    })
    slider.addEventListener('touchmove', (e) => {
        if (!pressed) return;
    
        let currentPosition = e.touches[0].clientX
    
        innerSlider.style.left = `${currentPosition - startX}px`
    
    })
}
document.addEventListener('DOMContentLoaded', App)