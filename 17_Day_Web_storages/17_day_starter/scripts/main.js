
const Me = {
    firstName: 'Ivan',
    lastname: 'Potyomin',
    age: 17,
    country: 'Belarus',
    city: 'Baran',
}

// const MeJson = JSON.stringify(Me, undefined, 4);
// const jMe = JSON.parse(MeJson, (key, value) => {
//     return typeof value !== 'object' ? (
//         localStorage.setItem(key, value) && value
//     ) : value;
// })
// console.log(jMe)


class PersonAccount {
    constructor(firstname, lastname, incomes, expenses) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.incomes = incomes;
        this.expenses = expenses;
    }

    get totalIncome() {
        return this.incomes;
    }

    get totalExpense() {
        return this.expenses;
    }

    set addIncome(amount) {
        this.incomes += amount;
    }

    set addExpense(amount) {
        this.expenses += amount;
    }

    profit() {
        return this.incomes - this.expenses;
    }

    accountInfo() {
        return `
        Name: ${this.firstname} ${this.lastname}
        Total Income: ${this.incomes}
        Total Expense: ${this.expenses}
        Profit: ${this.profit()}`;
    }
}


const person = new PersonAccount('Ivan', 'Potyomin', 5000, 2000);
console.log(person.accountInfo());
function setStorage () {
    localStorage.clear()
    localStorage.setItem('firstname', person.firstname)
    localStorage.setItem('lastname', person.lastname)
    localStorage.setItem('income', person.incomes)
    localStorage.setItem('expense', person.expenses)
    localStorage.setItem('profit', person.profit())
}
person.addIncome = 1000;
person.addExpense = 500;
console.log(person.accountInfo());
setStorage()
