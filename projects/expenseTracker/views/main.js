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
    newLi.innerHTML = `${ex} - ${des} - ${cat} <button id="${id}" class="delete btn btn-danger mx-2">Delete</button><button id="${id}" class="edit btn btn-dark">Edit</button>`;
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

// Insert and Update
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
        if(submitBtn.value === 'Update Expense') {
            const updateData = await axios.post(`http://localhost:5000/update/${hiddenId.value}`, {
                amount: expense.value,
                description: description.value,
                category: category.value
            });
            // console.log(updateData.data);
            printList(updateData.data.id, updateData.data.amount, updateData.data.description, updateData.data.category);
                        hiddenId.value = '';
            submitBtn.value = 'Add Expense';
        }

    }
    catch(err) {
        console.log(err);
    }
}
// Delete & Edit
output.addEventListener('click', deleteEdit);
async function deleteEdit (e) {
    try {
        // DELETE
        if(e.target.classList.contains('delete')) {
            const deletData = await axios.delete(`http://localhost:5000/delete/${e.target.id}`);
            // console.log(deletData.data.status);
            e.target.parentElement.remove();
        }
        // EDIT
        if(e.target.classList.contains('edit')) {
            const deletData = await axios.get(`http://localhost:5000/edit/${e.target.id}`);
            // console.log(deletData.data.id);
            hiddenId.value = deletData.data.id;
            expense.value = deletData.data.amount;
            description.value = deletData.data.description 
            category.value = deletData.data.category;
            submitBtn.value = 'Update Expense';
            e.target.parentElement.remove();
        }
    }
    catch(err) {
        console.log(err);
    }
}
