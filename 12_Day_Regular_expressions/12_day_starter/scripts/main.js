
// let regEx = new RegExp(pattern, flag)
let regEx = /love/gi;

const str = 'I love JavaScript!';
const pattern = /love/g;
const result = str.search(pattern);
console.log(result);

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language';

matchReplaced = txt.replace(/python/gi, 'JavaScript');
console.log(matchReplaced);


const txtTrash = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.';

matches = txtTrash.replace(/%/g, '');
console.log(matches);

const patternApple = /[a].*/g; // this square bracket means either A or a
const txtApple = 'Apple and banana are fruits';
const matchesApple = txtApple.match(patternApple);

console.log(matchesApple);

const textTest = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.';
const patternTest = /[Ee]-?mail/g;
matchesTest = textTest.match(patternTest);

console.log(matchesTest);

const txtQuad = 'This regular expression example was made in December 6,  2019.';
const patternQuad = /\b\d{1,4}\b/g;
const patternStart = /^[A-Za-z]{3,12}$/;
let name = 'Asabeneh';
let resultTest = patternStart.test(name);
matchesQuad = txtQuad.match(patternStart);

console.log(resultTest);

let text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
let patternEx = /\d+/g;
let matchesEx = text.match(patternEx);

console.log(parseInt(matchesEx[0])*12+parseInt(matchesEx[2])*12+parseInt(matchesEx[1]));

let textCoords = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction';
m = textCoords.match(/-?\d+/g);
m = m.map((el) => {return Number(el)});
const dist = (arr) => {
    let distBtw = arr[arr.length-1]-arr[0];
    return distBtw;
}

console.log(dist(m));

let pat = /[F/f]irst_?[Nn]ame/;
const is_valid_variable = (str) => {console.log(pat.test(str))};

is_valid_variable('FirstName');

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something 
which can give you all the capabilities to develop an application what else can you love.`;

function tenMostFrequentWords(txt, amount=10) {
    let matchTxt = txt.match(/[a-zA-Z\d]+/g);
    let b = false;
    let arr = [];
    for (let word of matchTxt) {
        for (let a of arr) {
            if (a.word===word) {for (let w of arr) {if (w.word===word) {w.quantity += 1;}} b=true;}
        }
        if (!b) {arr.push({'word':word, 'quantity':1});}
        b = false;
    }
    let buf = arr[0].quantity;
    for (let c=0; c<arr.length; c++) {
        for (let j=c+1; j<arr.length; j++) {
            if (arr[c].quantity < arr[j].quantity) {
                buf = arr[c];
                arr[c] = arr[j];
                arr[j] = buf;
            }
        }
    }
    return arr.slice(0, amount);
}

console.log(tenMostFrequentWords(paragraph, 5))

sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

function cleanText(str) {
    return str.replace(/[%#@$&;]/g, '');
}

console.log(cleanText(sentence))
console.log(tenMostFrequentWords(cleanText(sentence), 3))
