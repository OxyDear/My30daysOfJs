
let body = document.querySelector('body')
let wrapper = document.querySelector('#wrapper')
let box = document.querySelector('.box')
wrapper.innerHTML = 'Press any keyboard key'

document.addEventListener('keypress', (e) => {
    wrapper.innerHTML = `<span>You pressed <span style="font-weight: bold; color: #12a112">${e.key}</span></span>`
    box.innerHTML = `<div id="box">${e.keyCode}</div>`
})
