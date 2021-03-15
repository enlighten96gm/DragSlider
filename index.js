const App = () => {
    const slider = document.querySelector('.container')
    const innerSlider = document.querySelector('.slider')

    const items = [...document.querySelectorAll('.item1')]

    let pressed = false
    let startX 
    let x
    let firstPos = 0
    let dragged = false
    let currentPosition 
    let firstTouch


    slider.addEventListener('mousedown', (e) => {
        firstPos = e.pageX
        pressed = true
        startX = e.pageX - innerSlider.offsetLeft
    })
    
    slider.addEventListener('touchstart', (e) => {
        console.log(e);
        pressed = true
        firstTouch = e.touches[0].clientX
        startX = e.touches[0].clientX - innerSlider.offsetLeft
    })
    
    window.addEventListener('mouseup', (e) => {
        pressed = false 
if (firstPos >= 0 && firstPos <= 799 && x > firstPos) {
    let clone1 = items[5].cloneNode(true)
            x = 0
            let firstChild = innerSlider.firstChild
            innerSlider.insertBefore(clone1, firstChild)
            items.unshift(clone1)
            innerSlider.style.left = `-4565px`
            innerSlider.removeChild(items[6])
            items.pop()
} else if (firstPos <= 1470 && firstPos >= 801 && x < firstPos) {
            x = 1500
            let clone = items[0].cloneNode(true)
            innerSlider.appendChild(clone)
            items.push(clone)
            innerSlider.style.left = `-4565px`
            innerSlider.removeChild(items[0])
            items.shift()
}

    })
    window.addEventListener('touchend', (e) => {
        pressed = false
        // if (firstTouch >= 0 && firstTouch <= 799 && currentPosition > firstTouch) {
        //     let clone1 = items[5].cloneNode(true)
        //     currentPosition = 0
        //             let firstChild = innerSlider.firstChild
        //             innerSlider.insertBefore(clone1, firstChild)
        //             items.unshift(clone1)
        //             innerSlider.style.left = `-4565px`
        //             innerSlider.removeChild(items[6])
        //             items.pop()
        // } else if (firstTouch <= 1470 && firstTouch >= 801 && currentPosition < firstTouch) {
        //     currentPosition = 1500
        //             let clone = items[0].cloneNode(true)
        //             innerSlider.appendChild(clone)
        //             items.push(clone)
        //             innerSlider.style.left = `-4565px`
        //             innerSlider.removeChild(items[0])
        //             items.shift()
        // }
    })
    
    
    slider.addEventListener('mousemove', (e) => {
        dragged = true

        if (!pressed) return;
        x = e.pageX
        console.log(x - startX);
        if ((x - startX) <= -4550 && (x - startX) >= -5000 || (x - startX) >= -4580 && (x - startX) <= -4140) {
            innerSlider.style.left = `${x - startX}px`
        }

        // innerSlider.style.left = `${x - startX}px`

    })

    slider.addEventListener('touchmove', (e) => {
        if (!pressed) return;
    
        currentPosition = e.touches[0].clientX
    
        innerSlider.style.left = `${currentPosition - startX}px`
    
    })
}
document.addEventListener('DOMContentLoaded', App)