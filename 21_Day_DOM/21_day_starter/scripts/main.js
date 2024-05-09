
const p1 = document.querySelector('#one');
const p2 = document.querySelector('#two');
const p3 = document.querySelector('#three');
const p4 = document.querySelector('#four');
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

const nodeList = document.querySelectorAll('p');
nodeList[3].textContent = 'Fifth paragraph';
nodeList[3].id = 'five';
nodeList[2].setAttribute('id', 'four');

for (const nd of nodeList) {
    console.log(nd.textContent);
}

console.log(nodeList);

nodeList[1].style.fontSize = '24px';
nodeList[0].style.color = 'green';

nodeList.forEach((title, i) => {
    if (i % 2 === 0) {
        nodeList[i].style.color = 'green';
    } else {
        nodeList[i].style.color = 'red';
    }
})

const texts = ['first', 'second', 'third', 'fourth'];
const ids = ['one', 'two', 'three', 'four'];

for (let n = 0; n < texts.length; n++) {
    nodeList[n].textContent = texts[n];
    nodeList[n].id = ids[n];
    nodeList[n].className = ids[n];
}

console.log(nodeList);
