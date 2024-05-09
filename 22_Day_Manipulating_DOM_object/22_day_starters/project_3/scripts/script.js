
const body = document.querySelector('body')
const main = document.querySelector('h1');
const mainSecond = document.querySelector('h2');
const p = document.querySelector('#date');
const lis = document.querySelectorAll('li');
const div = document.querySelector('#container');
const divContent = document.querySelector('#content');
const names = document.querySelectorAll('.course');
const nodeDetails = document.querySelectorAll('details');

div.style.display = 'flex';
div.style.justifyContent = 'center';
divContent.style.alignItems = 'center';
divContent.style.width = '650px';
divContent.style.display = 'flex';
divContent.style.flexDirection = 'column';

// divContent.style.textAlign = 'left';

body.style.textAlign = 'center';
main.style.fontSize = '35px';
body.style.fontWeight = 'bold';

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
        break;
    case 4:
        month = 'May';
        break;
}

date.getHours()/10<1 ? hours = `0${date.getHours()}` : hours = date.getHours();
date.getMinutes()/10<1 ? minutes = `0${date.getMinutes()}` : minutes = date.getMinutes();
date.getSeconds()/10<1 ? seconds = `0${date.getSeconds()}` : seconds = date.getSeconds();

p.textContent = `${month} ${date.getDate()}, ${date.getFullYear()} ${hours}:${minutes}:${seconds}`;
p.style.border = 'solid';
p.style.borderColor = 'black';
p.style.width = '300px';
p.style.height = '24px'
p.style.margin = '0 auto';
p.style.textAlign = 'center';
p.style.verticalAlign = 'middle';
p.style.color = 'white';

function randomColor2 () {
    let random1 = Math.floor(Math.random()*255);
    let random2 = Math.floor(Math.random()*255);
    let random3 = Math.floor(Math.random()*255);
    color = `rgb(${random1},${random2},${random3})`;
    p.style.backgroundColor = color;
}

setInterval(randomColor2, 1000);

lis.forEach(li => {
    li.style.fontWeight = 'bold';
    li.style.borderRadius = '5px';
    li.style.color = '#7B3882';
    li.style.alignItems = 'center';
    li.style.lineHeight = '40px';
    li.style.width = '650px';
    li.style.display = 'flex';
    li.style.marginBottom = '5px';
    li.style.textIndent = '10px';
    li.style.justifyContent = 'space-between';

    if (li.textContent.toLowerCase().includes('done')) {
        li.style.backgroundColor = '#00C26B';
    } else if (li.textContent.toLowerCase().includes('ongoing')) {
        li.style.backgroundColor = '#FFD900';
    } else {
        li.style.backgroundColor = '#FF4E49';
    }
})

const nodeSpan = document.querySelectorAll('span');
const pSkills = document.querySelectorAll('.skills');

for (let el of nodeSpan) {
    if (el.id === 'year') {
        continue;
    }
    el.style.marginRight = '20px';
}

for (let top = 0; top < asabeneh.challenges.length; top++) {
    names[top].innerHTML = asabeneh.challenges[top].name;
    asabeneh.challenges[top].topics.forEach((el) => {pSkills[top].innerHTML += "<p style=\"line-height: 8px\">" + el + "</p>"; console.log(el)});
}

let name = document.querySelector('.name');
name.innerHTML = asabeneh.author.firstName + " " + asabeneh.author.lastName;

let desc = document.querySelector('.text');
console.log(desc);
desc.innerHTML = asabeneh.author.bio;

let descs = document.querySelector('.descs');
descs.style.display = 'flex';
descs.style.flexDirection = 'row';
descs.style.alignItems = 'start';
descs.style.marginBottom = '25px';

let titles = document.querySelector('.titles');
let ulTitle = document.createElement('p');
titles.style.listStyleType = 'none';
titles.style.display = 'flex';
titles.style.flexDirection = 'column';
titles.style.alignItems = 'start';
titles.style.justifyContent = 'center';
titles.appendChild(ulTitle);
ulTitle.innerHTML = 'Titles';
ulTitle.style.fontWeight = 'bold';
ulTitle.style.fontSize = '25px';

for (let title of asabeneh.author.titles) {
    let liTitle = document.createElement('li');
    liTitle.innerHTML = title[1];
    liTitle.style.fontWeight = 'normal';
    titles.appendChild(liTitle);
}

let skillsList = document.querySelector('.skillsAs');
let ulSkills = document.createElement('p');
skillsList.style.listStyleType = 'none';
skillsList.style.display = 'flex';
skillsList.style.flexDirection = 'column';
skillsList.style.alignItems = 'start';
skillsList.style.justifyContent = 'center';
skillsList.appendChild(ulSkills);
ulSkills.innerHTML = 'Skills';
ulSkills.style.fontWeight = 'bold';
ulSkills.style.fontSize = '25px';

for (let skill of asabeneh.author.qualifications) {
    let liTitle = document.createElement('li');
    liTitle.innerHTML = skill;
    liTitle.style.fontWeight = 'normal';
    skillsList.appendChild(liTitle);
}

let qualifications = document.querySelector('.qualifications');
let ulQual = document.createElement('p');
qualifications.style.listStyleType = 'none';
qualifications.style.display = 'flex';
qualifications.style.flexDirection = 'column';
qualifications.style.alignItems = 'start';
qualifications.style.justifyContent = 'center';
qualifications.appendChild(ulQual);
ulQual.innerHTML = 'Qualifications';
ulQual.style.fontWeight = 'bold';
ulQual.style.fontSize = '25px';

for (let qual of asabeneh.author.qualifications) {
    let liTitle = document.createElement('li');
    liTitle.innerHTML = qual;
    liTitle.style.fontWeight = 'normal';
    qualifications.appendChild(liTitle);
}

let keywords = document.querySelector('.keywords');
keywords.style.display = 'flex';
keywords.style.flexWrap = 'wrap';
keywords.style.flexDirection = 'row-reverse';

for (let word of asabeneh.keywords) {
    let w = document.createElement('p');
    w.innerHTML = "<span style=\"display: flex; padding-right: 10px; flex-direction: row; justify-content: center; margin-right: 40px; margin-top: -25px; border: 2px solid black; border-radius: 5px; background-color: beige; width: 80%; line-height: 30px; font-weight: bold; color: black\">#" + word + "</span>";
    keywords.appendChild(w);
}

