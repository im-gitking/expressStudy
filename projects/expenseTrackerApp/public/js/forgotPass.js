const forgotPassForm = document.querySelector('.forgotPass');
const email = document.querySelector('#email');

forgotPassForm.addEventListener('submit', forgotPassActions);
async function forgotPassActions(e) {
    try {
        e.preventDefault();
        const response = await axios.post('http://localhost:3000/password/forgotpassword', {
            email: email.value
        });
    }
    catch(err) {
        console.log(err);
    }
}