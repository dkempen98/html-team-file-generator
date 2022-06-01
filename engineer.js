// Add the engineer’s name, ID, email, and GitHub username tp the html

function engineerInfo({name, id, email, gitUser}, file) {
    file += `<div class="card" style="width: 18rem;">
    <div class="card-body bg-dark text-light">
        <h2 class="card-title">${name}</h2>
        <h6 class="card-subtitle mb-2">Engineer</h6>
        <ul>
            <li>Employee ID: ${id}</li>
            <li>Employee Email: <a href="mailto: ${email}" target="_blank">${email}</a></li>
            <li>GitHub Profile: <a href="https://github.com/${gitUser}" target="_blank">${gitUser}</a></li>
        </ul>
    </div>
</div>`

console.log(file);

return file
}

module.exports = {engineerInfo};