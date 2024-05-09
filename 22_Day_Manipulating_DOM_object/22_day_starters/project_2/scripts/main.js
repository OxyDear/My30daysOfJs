
const countries_wrapper = document.querySelector('.countries-wrapper');
const body = document.querySelector('body');

body.style.textAlign = 'center';
body.style.fontFamily = 'Oswald';
body.style.fontWeight = 'bold';

let country;
for (let c = 0;c < countries.length; c++) {
    if (c % 6 === 0) {
        country = document.createElement('p');
        countries_wrapper.appendChild(country);
    }
    country.innerHTML = country.innerHTML + ` <span style="width: 150px; height: 150px; margin-left: 10px; border: 2px solid gray; border-radius: 5px; background-color: #FEFBF6; line-height: 150px">${countries[c]}</span>`;
    country.style.display = 'flex';
    country.style.justifyContent = 'center';
    country.style.marginTop = '20px';
}
