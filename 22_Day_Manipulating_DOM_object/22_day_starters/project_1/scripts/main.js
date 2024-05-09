
const body = document.querySelector('body')
const wrapper = document.querySelector('div');

body.style.textAlign = 'center';
body.style.fontFamily = 'Oswald';

let number;
let color;
for (let num=0;num<=101;num++) {
    if (num % 6 === 0) {
        number = document.createElement('p');
        wrapper.appendChild(number);
    }
    if (num === 1) {
        color = '#ECCE72';
    } else if (num === 2) {
        color = 'red';
    }
    if (num % 2 === 0 && num!==2) {
        color = 'green';
    } else {
        for (let n=2;n<num;n++) {
            if (num % n === 0) {
                color = '#ECCE72';
                break;
            } else {
                color = 'red';
            }
        }
    }
    number.innerHTML = number.innerHTML + ` <span id="${num}" style="margin: 5px; background-color: ${color}; width: 50px; height: 25px; font-weight: bold; color: beige">${num}</span>`;
    number.style.display = 'flex';
    number.style.marginBottom = '-20px';
    number.style.justifyContent = 'center';
    number.style.textAlign = 'center';
}
