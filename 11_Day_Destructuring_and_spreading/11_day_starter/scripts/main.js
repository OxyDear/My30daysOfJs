const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
const users = [
    {
        name:'Brook',
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex',
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'David',
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    },
    {
        name:'John',
        scores:85,
        skills:['HTML'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha',
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
]

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
let [fin, est, sw, den, nor] = countries;
let {width: w, height: h, area: a, perimeter: p} = rectangle;

for (let {name, scores, skills, age} of users) {
    console.log(name, scores, skills, age);
}

let Less2skills = users.filter((person) => (person.skills.length < 2));
for (let {name} of Less2skills) {
    console.log(name);
}

console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);
console.log(fin, est, sw, den, nor);
console.log(w, h, a, p);

for (let {name: n, capital: c, languages: l, population: pop} of countriesData) {
    console.log(n, c, l, pop);
}

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

let [name, skills, scores] = student;
let [, , jsScore, reactScore] = scores

console.log(name, skills, jsScore, reactScore)


const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(students) {
    let objStudents = [];
    for (let [name, skills, grades] of students) {
        objStudents.push({'name': name, 'skills': skills, 'grades': grades});
    }
    return objStudents;
}

console.log(convertArrayToObject(students));

const studentObject = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}

let newStudent = {...studentObject};

let {name:nm, age, skills:s} = newStudent;

s.frontEnd.push({skill: 'BootStrap', level: 8});
s.backEnd.push({skill: 'Express', level: 9});
s.dataBase.push({skill: 'SQL',level: 8});
s.dataScience.push('SQL');

console.log(nm, age, s);
