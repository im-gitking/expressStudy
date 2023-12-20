const addExpenseForm = document.querySelector('.addExpenseForm');
const expenseamount = document.querySelector('#expenseamount');
const description = document.querySelector('#description');
const category = document.querySelector('#category');
const addExpenseBtn = document.querySelector('#addExpenseBtn');

const expenseList = document.querySelector('.expenseList');

const token = localStorage.getItem('token');

const addToExpenseList = (expense) => {
    const newLi = document.createElement('li');
    newLi.innerHTML = `<span>${expense.expenseamount} - ${expense.category} - ${expense.description} </span><button class="deleteExpense" id="${expense.id}">Delete Expense</button>`;
    expenseList.appendChild(newLi);
}

// Show Present Expenses
document.addEventListener('DOMContentLoaded', showExpenses);
async function showExpenses(e) {
    try {
        const getExpenses = await axios.get('http://localhost:3000/expenses/addExpense', { headers: { "Authorization": token } });
        getExpenses.data.forEach(expense => {
            addToExpenseList(expense);
        });

        if (localStorage.getItem('premium') === 'true') {
            console.log(1);
            const buyPremium = document.querySelector('.buyPremium');
            buyPremium.remove();

            const premium = document.querySelector('.premium');
            premium.innerHTML = '<p>Premium User</p>';
            
        }
    }
    catch (err) {
        console.log(err);
    }
}

// Insert in DB
addExpenseForm.addEventListener('submit', postExpenses);
async function postExpenses(e) {
    try {
        e.preventDefault();
        const expense = {
            expenseamount: expenseamount.value,
            description: description.value,
            category: category.value
        };
        console.log(2);
        const postedExpense = await axios.post('http://localhost:3000/expenses/addExpense', expense, { headers: { "Authorization": token } });
        addToExpenseList(postedExpense.data);
    }
    catch (err) {
        console.log(err);
    }
}

// Delete Expense
document.addEventListener('click', deleteExpense);
async function deleteExpense(e) {
    try {
        if (e.target.classList.contains('deleteExpense')) {
            const expenseId = e.target.id;
            // console.log(expenseId);
            const deletRequest = await axios.delete(`http://localhost:3000/expenses/addExpense/${expenseId}`, { headers: { "Authorization": token } });
            // console.log(deletRequest.data);
            e.target.parentElement.remove();
        }

    }
    catch (err) {
        console.log(err);
    }
}