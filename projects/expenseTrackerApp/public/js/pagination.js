const paginations = document.querySelector('.paginations');
document.addEventListener('DOMContentLoaded', addPaginations);

async function addPaginations(e, targetPage) {
    const pageNum = targetPage || 1;

    try {
        const paginationData = await axios.get(`http://localhost:3000/expenses/pagination?page=${pageNum}`, { headers: { "Authorization": token } });

        // Clear the expense list and add new expenses
        expenseList.innerHTML = '';
        paginationData.data.userExpenses.forEach(expense => {
            addToExpenseList(expense);
        });

        // Last number of pages
        const lastPageNum = Math.ceil(paginationData.data.totalExpenses / 5);

        // Add Paginations
        paginations.innerHTML = '';

        if (pageNum > 1) {
            paginations.innerHTML += `<button id="${pageNum - 1}" class="pageNumber">< Previous</button>`;
        }

        if (1 < pageNum - 2) {
            paginations.innerHTML += `<button id="1" class="pageNumber">1</button><span> ... </span>`;
        }

        for (let i = Math.max(1, pageNum - 2); i <= Math.min(lastPageNum, pageNum + 2); i++) {
            if (i === pageNum) {
                paginations.innerHTML += `<button id="${i}" class="pageNumber"><strong>${i}</strong></button>`;
            }
            else {
                paginations.innerHTML += `<button id="${i}" class="pageNumber">${i}</button>`;
            }
        }

        if (lastPageNum > pageNum + 2) {
            paginations.innerHTML += `<span> ... </span><button id="${lastPageNum}" class="pageNumber">${lastPageNum}</button>`;
        }

        if (pageNum < lastPageNum) {
            paginations.innerHTML += `<button id="${pageNum + 1}" class="pageNumber">Next ></button>`;
        }
    }
    catch (err) {
        console.error(err);
    }
};

paginations.addEventListener('click', (e) => {
    if (e.target.classList.contains('pageNumber')) {
        addPaginations(null, Number(e.target.id));
    }
});
