
function outerFunction () {
    let count = 0
    function innerFunctionOne () {
        count++;
        return count;
    }
    function innerFunctionTwo () {
        count+=2;
        return count;
    }
    function innerFunctionThree () {
        count+=3;
        return count;
    }
    return {
        innerFunctionThree: innerFunctionThree,
        innerFunctionOne: innerFunctionOne,
        innerFunctionTwo: innerFunctionTwo,
    };
}


const innerFuncs = outerFunction();

console.log(innerFuncs.innerFunctionOne())
console.log(innerFuncs.innerFunctionThree())
console.log(innerFuncs.innerFunctionTwo())


function personAccount () {
    const name = 'Ivan';
    const lastname = 'Potyomin';
    let incomes = 50000;
    let expenses = 23;

    function totalIncome () {
        return incomes;
    }

    function totalExpense () {
        return expenses;
    }

    function accountInfo () {
        return `\t${name} ${lastname}\n\tIncomes: ${incomes}\n\tExpenses: ${expenses}`
    }

    function addIncome (income) {
        incomes+=income;
        return incomes;
    }

    function addExpense (expense) {
        expenses+=expense;
        return expenses;
    }
    return {
        totalIncome: totalIncome,
        totalExpense: totalIncome,
        accountInfo: accountInfo,
        addIncome: addIncome,
        addExpense: addExpense,
    }
}


const personality = personAccount();
console.log(personality.accountInfo());
console.log(personality.addExpense(2));
console.log(personality.accountInfo());
console.log(personality.addIncome(754967));
console.log(personality.accountInfo())
