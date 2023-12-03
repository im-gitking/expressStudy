const form = document.querySelector('.appointment');
const uname = document.querySelector('#uname');
const pnumber = document.querySelector('#pnumber');
const email = document.querySelector('#email');
const deleteEdit = document.querySelector('.show-list');

const addList = (id, a, b, c) => {
    console.log(id, 124);
    const showList = document.querySelector('.show-list');
    const newLi = document.createElement('li');
    newLi.classList = 'mt-2';
    newLi.innerHTML = `${a} - ${b} - ${c} <button id="${id}" class="dlt liId btn btn-dark mx-2">Delete</button><button id="${id}" class="edit liId btn btn-primary">Edit</button>`;
    showList.appendChild(newLi);
}

const sendData = async (a, b, c) => {
    try {
        const data = {
            uname: a,
            pnum: b,
            email: c
        };
        const result = await axios.post('http://localhost:4000/', data);
        console.log(result.data);
        return result.data.id;
    }
    catch (err) {
        console.log(err);
    }
}

form.addEventListener('submit', formControl);
document.addEventListener('DOMContentLoaded', loadList);
deleteEdit.addEventListener('click', deleteEditUser);

async function formControl(e) {
    try {
        e.preventDefault();
        const id = await sendData(uname.value, pnumber.value, email.value);
        console.log(id);
        addList(id, uname.value, pnumber.value, email.value);
    }
    catch(err) {
        console.log(err);
    }
}

async function loadList(e) {
    try {
        const appoinments = await axios.get('http://localhost:4000/');
        appoinments.data.forEach(appoinment => {
            console.log(appoinment.id, appoinment.userName, appoinment.email, appoinment.phoneNumber);
            addList(appoinment.id, appoinment.userName, appoinment.email, appoinment.phoneNumber);
        });
    }
    catch (err) {
        console.log(err);
    }
}

async function deleteEditUser(e) {
    try {
        // DELETE PART
        if(e.target.classList.contains('dlt')) {
            // console.log(e.target.id);
            const delReq = await axios.delete(`http://localhost:4000/delete/${e.target.id}`);
            // console.log(delReq.data);
            e.target.parentElement.remove();
        }
        // EDIT PART
        if(e.target.classList.contains('edit')) {
            // console.log(e.target.id);
            const editReq = await axios.get(`http://localhost:4000/update/${e.target.id}`);
            // console.log(editReq.data);
            uname.value = editReq.data.userName;
            pnumber.value = editReq.data.phoneNumber;
            email.value = editReq.data.email;
            document.querySelector('#hidden').value = editReq.data.id;
            document.querySelector('.submit').value = 'Update';
            e.target.parentElement.remove();
        }
    }
    catch (err) {
        console.log(err);
    }
}
