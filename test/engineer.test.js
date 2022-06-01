const engineer = require('../engineer');

// test that the text variable that is sent to the file contains the expected
// addition when run through the function

test('Engineer card added to string', () => {
    let person = {
        "name": 'Julia James',
        "id": '1234',
        "email": 'Julia@fakeemail.com',
        "gitUser": 'JuliaGit'
    }

    let emptyString = '';

    expect(engineer.engineerInfo(person, emptyString)).toEqual(`<div class="card" style="width: 18rem;">
    <div class="card-body bg-dark text-light">
        <h2 class="card-title">${person.name}</h2>
        <h6 class="card-subtitle mb-2">Engineer</h6>
        <ul>
            <li>Employee ID: ${person.id}</li>
            <li>Employee Email: <a href="mailto: ${person.email}" target="_blank">${person.email}</a></li>
            <li>GitHub Profile: <a href="https://github.com/${person.gitUser}" target="_blank">${person.gitUser}</a></li>
        </ul>
    </div>
</div>`);

})