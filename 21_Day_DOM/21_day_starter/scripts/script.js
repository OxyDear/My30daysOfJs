
const body = document.querySelector('body')
const main = document.querySelector('h1');
const mainSecond = document.querySelector('h2');
const p = document.querySelector('p');
const lis = document.querySelectorAll('li');
body.style.textAlign = 'center';
main.style.fontSize = '35px';
// body.style.fontFamily = 'fonts/Harmony.ttf';

let link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'https://fonts.google.com/specimen/Oswald');
document.head.appendChild(link);

body.style.fontFamily = 'Oswald';

main.innerHTML = 'Asabeneh Yetayeh challenges in <span id="year">2020</span>'

let year = document.querySelector('#year')
year.style.fontSize = '50px';
let color;
function randomColor () {
    let random1 = Math.floor(Math.random()*255);
    let random2 = Math.floor(Math.random()*255);
    let random3 = Math.floor(Math.random()*255);
    color = `rgb(${random1},${random2},${random3})`;
    year.style.color = color;
}

setInterval(randomColor, 1000);

mainSecond.style.textDecoration = 'underline';
mainSecond.style.textAlign = 'center';

let date = new Date();
let month, hours, minutes, seconds;

switch (date.getMonth()) {
    case 1:
        month = 'February';
}

date.getHours()/10<1 ? hours = `0${date.getHours()}` : hours = date.getHours();
date.getMinutes()/10<1 ? minutes = `0${date.getMinutes()}` : minutes = date.getMinutes();
date.getSeconds()/10<1 ? seconds = `0${date.getSeconds()}` : seconds = date.getSeconds();

p.textContent = `${month} ${date.getDate()}, ${date.getFullYear()} ${hours}:${minutes}:${seconds}`;
p.style.border = 'solid';
p.style.borderColor = 'black';
// p.style.fontFamily = 'Harmony.ttf'
p.style.width = '300px';
p.style.height = '24px'
p.style.margin = '0 auto';
p.style.textAlign = 'center';
p.style.verticalAlign = 'middle';
p.style.color = 'white';
// p.style.fontFamily = 'Lato';
// p.style.vert = '5px'
// p.style.

function randomColor2 () {
    let random1 = Math.floor(Math.random()*255);
    let random2 = Math.floor(Math.random()*255);
    let random3 = Math.floor(Math.random()*255);
    color = `rgb(${random1},${random2},${random3})`;
    p.style.backgroundColor = color;
}

setInterval(randomColor2, 1000);

lis.forEach(li => {
    li.style.listStyle = 'none';
    // li.style.border = 'solid';
    li.style.margin = '0 auto';
    // li.style.marginBottom = '5px';
    li.style.color = 'black';
    li.style.width = '650px';
    li.style.height = '40px';
    li.style.textAlign = 'center';
    li.style.textAnchor = 'middle';
    // li.style.margin = '5px';
    if (li.textContent.toLowerCase().includes('done')) {
        li.style.backgroundColor = 'green';
    } else if (li.textContent.toLowerCase().includes('ongoing')) {
        li.style.backgroundColor = 'yellow';
    } else {
        li.style.backgroundColor = 'red';
    }
})
