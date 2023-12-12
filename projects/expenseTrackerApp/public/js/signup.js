// console.log(1);
const signupForm = document.querySelector('.signupForm');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

// signup data submission
signupForm.addEventListener('submit', signupSubmit);
async function signupSubmit(e) {
    e.preventDefault();
    try {
        const signupSubmitedData = await axios.post(`http://localhost:3000/signup`, {
            name: name.value,
            email: email.value,
            password: password.value
        });
        console.log(signupSubmitedData.data);
        console.log(signupSubmitedData.status);
    }
    catch (err) {
        console.log("Error -",err.response.status,": ", err.message);
    }
}