'use strict'

let lastUpdate = document.createElement('h2');
document.querySelector('#case-count').insertBefore(lastUpdate, worldCaseCount);
fetchDate();

// Gets the date the API was last updated
// Uses Lodash _.sample function to pick a random country
// Then uses Lodash _.truncate to present last update date
// Modifies text content of heading
async function fetchDate() {
    const data = await fetchData();
    let randomCountry = _.sample(data);
    let date = _.truncate(randomCountry.lastupdate, { 'length': 10, 'omission': '' });
    lastUpdate.textContent = 'Last updated: ' + date;
}