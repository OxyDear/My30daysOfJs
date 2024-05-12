
const body = document.querySelector('body')
const wrapper = document.querySelector('div');
const ipt = document.querySelector('#amount');
const btn = document.querySelector('#amountButton');

body.style.textAlign = 'center';
body.style.fontFamily = 'Oswald';
wrapper.style.display = 'flex';
wrapper.style.flexWrap = 'wrap';
wrapper.style.justifyContent = 'center';

let amount = 0;
btn.addEventListener('click', () => displayNumbers(ipt.value))

function displayNumbers (amount) {
    wrapper.innerHTML = ''
    let number;
    let color;
    for (let num = 0; num <= amount; num++) {
        if (num % 6 === 0) {
            number = document.createElement('p');
            wrapper.appendChild(number);
        }
        if (num === 1) {
            color = '#ECCE72';
        } else if (num === 2) {
            color = 'red';
        }
        if (num % 2 === 0 && num !== 2) {
            color = 'green';
        } else {
            for (let n = 2; n < num; n++) {
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
}