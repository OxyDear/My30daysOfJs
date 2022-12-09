
const users = {
    Ivan: {
        email: 'ivan@ivan.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL'],
        age: 16,
        isLoggedIn: false,
        points: undefined
    },
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

const dog = {
    name: 'Hippo',
    legs: 4,
    color: 'black',
    age: 3,
    bark: function () {
        return 'woof woof'
    },
    breed: 'poodle',
}

const counties = {
    name: 'Belarus',
    capital: 'Minsk',
    population: 9.34,
    language: 'Russian, Belarusian',
}

const copyUser = Object.assign(users)
let per = 0

for (let person of Object.keys(users)) {
    if (users[person].points >= 50) {
        per++
    }
}

const personAccount = {
    firstname: 'Ivan',
    lastname: 'Potyomin',
    incomes: 100,
    expenses: 50,
    totalIncome: function () {
        return this.incomes
    },
    totalExpenses: function () {
        return this.expenses
    },
    accountInfo: function () {
        return this
    },
    addExpense: function (adder) {
        return this.expenses + adder
    },
    accountBalance: function () {
        return this.incomes - this.expenses
    }
}

const usernames = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]

function signUp(user, product) {
    let id = undefined
    for (let u of usernames) {
        if (u.username.toLowerCase() == user.toLowerCase()) {
            if (u.isLoggedIn) {
                id = u._id
            } else {
                return `${u.username} is not logged`
            }
        }
    }

    if (id == undefined) {
        return `None user: ${user}`
    }

    for (let prod of products) {
        if (prod.name.toLowerCase() == product.toLowerCase()) {
            prod.likes.push(id)
            return `Your ${prod.name} added in likes, ${user}`
        }
    }

    return `None product: ${product}`
}

function signIn(user) {
    for (let person of usernames) {
        if (person.username.toLowerCase() == user.toLowerCase()) {
            person.isLoggedIn = true
            return `${person.username} is logged`
        }
    }
}

function addRatingToProduct(user, product, rate) {
    let id = undefined
    for (let u of usernames) {
        if (u.username.toLowerCase() == user.toLowerCase()) {
            id = u._id
        }
    }

    if (id == undefined) {
        return `None user: ${user}`
    }

    for (let prod of products) {
        if (prod.name.toLowerCase() == product.toLowerCase()) {
            prod.ratings.push({userId: id, rate: rate})
            return `You added ${prod.name} rate ${rate}, ${user}`, prod.ratings
        }
    }
}

function mediumRating(product) {
    let rat = 0
    let count = 0

    for (let prod of products) {
        if (prod.name.toLowerCase() == product.toLowerCase()) {
            for (let r of prod.ratings) {
                rat += r.rate
                count++
            }
        }
    }

    return rat / count

}


// console.log(per)
// console.log(Object.keys(copyUser))
// console.log(Object.values(copyUser))
// console.log(counties)
console.log(signUp('Alex', 'tv'))
console.log(signIn('Alex'))
console.log(signUp('Alex', 'tv'))
console.log(addRatingToProduct('alex', 'tv', 4))
console.log(mediumRating('tv'))
