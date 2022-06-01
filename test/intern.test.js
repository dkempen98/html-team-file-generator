const intern = require('../intern');

// test that the text variable that is sent to the file contains the expected
// addition when run through the function

test('Intern card added to string', () => {
    let person = {
        "name": 'Woody Hayes',
        "id": '1978',
        "email": 'Woody@osu.com',
        "school": 'Ohio State'
    }

    let emptyString = '';

    expect(intern.internInfo(person, emptyString)).toEqual(`<div class="card" style="width: 18rem;">
    <div class="card-body bg-dark text-light">
        <h2 class="card-title">${person.name}</h2>
        <h6 class="card-subtitle mb-2">Intern</h6>
        <ul>
            <li>Employee ID: ${person.id}</li>
            <li>Employee Email: <a href="mailto: ${person.email}" target="_blank">${person.email}</a></li>
            <li>School: ${person.school}</li>
        </ul>
    </div>
</div>`);

})