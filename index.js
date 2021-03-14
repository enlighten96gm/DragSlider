const App = () => {
    const slider = document.querySelector('.container')
    const innerSlider = document.querySelector('.slider')

    const items = [...document.querySelectorAll('.item1')]

    let pressed = false
    let startX 
    let x
    let number = 0
    let arr = []
    


    


    slider.addEventListener('mousedown', (e) => {
        number = e.pageX
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
        let number2 = e.pageX 
        if (pressed) {
            
            // console.log(number)
        // console.log(number2 - number)
        // console.log(Math.abs(number2 - number));
            if (Math.abs(number2 - number) >= 390 && Math.abs(number2 - number) <= 400) {
                console.log('[eq');
                // numeber = number2
            }         
        }
        

        if (!pressed) return;
        x = e.pageX
        let helper = Number((innerSlider.style.left).split('').splice(1, 3).join(''))

        innerSlider.style.left = `${x - startX}px`
        
            if (Math.abs(number2 - number) >= 390 && Math.abs(number2 - number) <= 420) {   
            let clone = items[0].cloneNode(true)
            innerSlider.appendChild(clone)
            items.push(clone)
            innerSlider.style.left = `-2800px`
            innerSlider.removeChild(items[0])
            items.shift()
            console.log(items);
            }
    })

    slider.addEventListener('touchmove', (e) => {
        if (!pressed) return;
    
        let currentPosition = e.touches[0].clientX
    
        innerSlider.style.left = `${currentPosition - startX}px`
    
    })
}
document.addEventListener('DOMContentLoaded', App)