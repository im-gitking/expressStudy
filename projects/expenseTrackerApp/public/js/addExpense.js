const addExpenseForm = document.querySelector('.addExpenseForm');
const expenseamount = document.querySelector('#expenseamount');
const description = document.querySelector('#description');
const category = document.querySelector('#category');
const addExpenseBtn = document.querySelector('#addExpenseBtn');

const expenseList = document.querySelector('#expenseList');

const addToExpenseList = (expense) => {
    const newLi = document.createElement('li');
    newLi.innerHTML = `<span>${expense.expenseamount} - ${expense.category} - ${expense.description}</span><button class="deleteExpense" id="${expense.id}">Delete Expense</button>`;
    expenseList.appendChild(newLi);
}

// Show Present Expenses
document.addEventListener('DOMContentLoaded', showExpenses);
async function showExpenses (e) {
    try {
        const getExpenses = await axios.get('http://localhost:3000/expenses/addExpense');
        getExpenses.data.forEach(expense => {
            addToExpenseList(expense);
        });
    }
    catch(err) {
        console.log(err);
    }
}

// Insert in DB
addExpenseForm.addEventListener('submit', postExpenses);
async function postExpenses (e) {
    try {
        e.preventDefault();
        const expense = {
            expenseamount: expenseamount.value,
            description: description.value,
            category: category.value
        };
        const postedExpense = await axios.post('http://localhost:3000/expenses/addExpense', expense);
        addToExpenseList(postedExpense.data);
    }
    catch(err) {
        console.log(err);
    }
}

// Delete Expense