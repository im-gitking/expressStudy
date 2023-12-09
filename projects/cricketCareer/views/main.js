const detailsForm = document.querySelector('.detailsSubmit');
const name = document.querySelector('#name');
const dob = document.querySelector('#dob');
const photo = document.querySelector('#photo');
const birthplace = document.querySelector('#birthplace');
const career = document.querySelector('#career');
const numberOfMatches = document.querySelector('#numberOfMatches');
const score = document.querySelector('#score');
const fifties = document.querySelector('#fifties');
const centuries = document.querySelector('#centuries');
const wickets = document.querySelector('#wickets');
const avarage = document.querySelector('#avarage');

const printDeatils = ()

// post details / submit
detailsForm.addEventListener('submit', submitMethod)

async function submitMethod(e) {
    e.preventDefault();
    try {
        const playerData = {
            name: name.value,
            dob: dob.value,
            photo: photo.value,
            birthplace: birthplace.value,
            career: career.value,
            numberOfMatches: numberOfMatches.value,
            score: score.value,
            fifties: fifties.value,
            centuries: centuries.value,
            wickets: wickets.value,
            avarage: avarage.value
        };
        const submitResponse = await axios.post('http://localhost:5000/cricketer/submit');
        console.log(submitResponse.data);
    }
}

// update details / edit

// get details / search