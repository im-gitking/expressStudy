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

const searchForm = document.querySelector('.searchForm');
const playerName = document.querySelector('#playerName');



const printDeatils = (name, dob, photo, birthplace, career, numberOfMatches, score, fifties, centuries, wickets, avarage, id) => {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `<div class="cricketer-details">
    <div class="leftside">
        <h2>${name}</h2>
        <div class="playerPic">
            <img src="${photo}" alt="" srcset="">
        </div>
        <p>Date of Birth: ${dob}</p>
        <p>Birth Place: ${birthplace}</p>
        <div class="playerInfo">
            <h2>Player Infromation</h2>
            <p>No of Matches: ${numberOfMatches}</p>
            <p>Runs: ${score}</p>
            <p>No of Fifties: ${fifties}</p>
            <p>No of Centuries: ${centuries}</p>
            <p>Avg: ${avarage}</p>
            <p>Wickets: ${wickets}</p>
        </div>
    </div>

    <div class="rightside">
        <form class="hiddenSearch" action="/" method="post">
            <input type="hidden" id="hid" name="hiddenSearch" value="${id}">
            <button type="submit" class="editBtn">Edit Player</button>
        </form>
        <p>${career}</p>
    </div>
    </div>`
    document.querySelector('main').appendChild(newDiv);

    // edit form fill
    const hiddenSearch = document.querySelector('.hiddenSearch');
    const hid = document.querySelector('#hid');
    hiddenSearch.addEventListener('submit', fillFields);

    async function fillFields(e) {
        try {
            e.preventDefault();
            // console.log(hid.value);
            const submitResponse = await axios.post('http://localhost:4000/cricketer/edit', {
                id: hid.value
            });
            // console.log(submitResponse.data);

            document.querySelector('#name').value = submitResponse.data.name;
            document.querySelector('#dob').value = submitResponse.data.dob;
            document.querySelector('#photo').value = submitResponse.data.photo;
            document.querySelector('#birthplace').value = submitResponse.data.birthplace;
            document.querySelector('#career').value = submitResponse.data.career;
            document.querySelector('#numberOfMatches').value = submitResponse.data.numberOfMatches;
            document.querySelector('#score').value = submitResponse.data.score;
            document.querySelector('#fifties').value = submitResponse.data.fifties;
            document.querySelector('#centuries').value = submitResponse.data.centuries;
            document.querySelector('#wickets').value = submitResponse.data.wickets;
            document.querySelector('#avarage').value = submitResponse.data.avarage;
            document.querySelector('#hiddenId').value = submitResponse.data.id;
            document.querySelector('.btn').value = 'Update';

        }
        catch (err) {
            console.log(err);
        }
    }
}

// post details / submit or Update
detailsForm.addEventListener('submit', submitMethod)

async function submitMethod(e) {
    try {
        e.preventDefault();
        const btn = document.querySelector('.btn');

        // for new submisssion
        if (btn.value === 'Submit') {
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
            const submitResponse = await axios.post('http://localhost:4000/cricketer/submit', playerData);
            // console.log(submitResponse.data);
        }

        //for update player data
        if (btn.value === 'Update') {
            const id = document.querySelector('#hiddenId').value;
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
            const submitResponse = await axios.post(`http://localhost:4000/cricketer/update/${id}`, playerData);
            console.log(submitResponse.data);
            document.querySelector('.btn').value = 'Submit';
            location.reload();
        }


    }
    catch (err) {
        console.log(err);
    }
}

// get details / search
searchForm.addEventListener('submit', featchDeatils);

async function featchDeatils(e) {
    e.preventDefault();
    try {
        const fetchedData = await axios.post('http://localhost:4000/cricketer/fetch', {
            name: playerName.value
        });
        const data = fetchedData.data[0];
        printDeatils(data.name, data.dob, data.photo, data.birthplace, data.career, data.numberOfMatches, data.score, data.fifties, data.centuries, data.wickets, data.avarage, data.id);
    }
    catch (err) {
        console.log(err);
    }
}

// update details
