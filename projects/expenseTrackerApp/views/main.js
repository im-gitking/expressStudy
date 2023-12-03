const form = document.querySelector('#formId');
const expense = document.querySelector('#expense');
const description = document.querySelector('#description');
const category = document.querySelector('#category');
const hiddenId = document.querySelector('#hidden');
const submitBtn = document.querySelector('#submit');

const output = document.querySelector('.output');

const printList = (id, ex, des, cat) => {
    const newLi = document.createElement('li');
    newLi.classList = 'mt-3';
    newLi.innerHTML = `${ex} - ${des} - ${cat} <button id="${id}" class="btn btn-danger mx-2">Delete</button><button id="${id}" class="btn btn-dark">Edit</button>`;
    output.appendChild(newLi);
}

// Show List
document.addEventListener('DOMContentLoaded', loadList);
async function loadList (e) {
    try {
        const fullList = await axios.get('http://localhost:5000/');
        fullList.data.forEach(expense => {
            printList(expense.id, expense.amount, expense.description, expense.category);
        });
    }
    catch(err) {
        console.log(err);
    }
}

// Insert
form.addEventListener('submit', formSubmit);
async function formSubmit(e) {
    try{
        e.preventDefault();
        // for new data
        if(submitBtn.value === 'Add Expense') {
            const submitData = await axios.post('http://localhost:5000/', {
                amount: expense.value,
                description: description.value,
                category: category.value
            });
            printList(submitData.data.id, submitData.data.amount, submitData.data.description, submitData.data.category);
            
        }

        // for Update Old Data
        

    }
    catch(err) {
        console.log(err);
    }
}
// Delete
// Edit