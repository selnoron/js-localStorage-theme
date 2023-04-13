const bl = document.querySelector('.black')
const wh = document.querySelector('.white')
const ra = document.querySelector('.rain')
const co = document.querySelector('.color')

function switchTheme() {
    if (bl.checked) {
        localStorage.setItem('color', `rgb(47, 47, 49)`)
    }
    if (wh.checked) {
        localStorage.setItem('color', `white`)
    }
    if (ra.checked) {
        localStorage.setItem('color', `${co.value}`)
    }
    document.body.style.backgroundColor = `${localStorage.getItem('color')}`
}

document.body.style.backgroundColor = `${localStorage.getItem('color')}`

bl.addEventListener('click', switchTheme)
wh.addEventListener('click', switchTheme)
ra.addEventListener('click', switchTheme)