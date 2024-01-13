const paginations = document.querySelector('.paginations');

document.addEventListener('DOMContentLoaded', addPaginations);
async function addPaginations(e) {
    try {
        const paginationData = await axios.post('http://localhost:3000/expenses/pagination?page=1', { headers: { "Authorization": token } });
    }
    catch (err) {
        console.log(err);
    }
};