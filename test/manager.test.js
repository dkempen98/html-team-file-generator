const manager = require('../manager');

// test that the text variable that is sent to the file contains the expected
// addition when run through the function

test('manager card added to string', () => {
    let person = {
        "name": 'Ron Swanson',
        "id": '1776',
        "email": 'none@yourbuisness.gov',
        "office": 'PnR'
    }

    let emptyString = '';

    expect(manager.managerInfo(person, emptyString)).toEqual(`<div class="card" style="width: 18rem;">
    <div class="card-body bg-dark text-light">
        <h2 class="card-title">${person.name}</h2>
        <h6 class="card-subtitle mb-2">Manager</h6>
        <ul>
            <li>Employee ID: ${person.id}</li>
            <li>Employee Email: <a href="mailto: ${person.email}" target="_blank">${person.email}</a></li>
            <li>Office Number: ${person.office}</li>
        </ul>
    </div>
</div>`);

})