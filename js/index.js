'use strict'

// State manages whether information is currently being shown
const state = {
    countryCases: [{ visible: false }]
};

let worldCaseCount = document.createElement('div');
document.querySelector('#case-count').appendChild(worldCaseCount);

// creates a header and inserts it into the DOM
// Takes in a data item from API that has been formatted and a string
// Appends a header element to the worldCaseCount div
function createHeader(item, textContent) {
    let header = document.createElement('h3');
    header.textContent = textContent + item;
    worldCaseCount.appendChild(header);
}

// Create an alert that is invisible
let alert = document.createElement('alert');
alert.classList.add('alert');
alert.classList.add('d-none');
alert.classList.add('alert-danger');
alert.textContent = 'Case data could not be retrieved';
// Add the alert to a parent element
document.querySelector('#case-count').insertBefore(alert, worldCaseCount);

// Allow user to show cases by country.
let button = document.createElement('button');
button.classList.add('caseButton');
button.textContent = 'Show cases by Country';
document.querySelector('#case-count').insertBefore(button, worldCaseCount);

// Button event listener to toggle the cases by country
button.addEventListener('click', function () {
    if (state.countryCases.visible === true) {
        state.countryCases.visible = false;
        removeData();
    } else {
        state.countryCases.visible = true;
        displayData();
    }
})

// Web API to display Coronavirus statistics, same source as Samuel Hernadez's on map.
// Use of NumberFormat from MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
fetch('https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief')
    .then(function (response) {
        if (!response.ok) {
            // Make the alert visible
            alert.classList.replace('d-none', 'd-block');
        }
        return response.json();
    })
    .then(function (data) {
        createHeader(new Intl.NumberFormat().format(data.confirmed), 'Confirmed: ');
        createHeader(new Intl.NumberFormat().format(data.deaths), 'Deaths: ');
        createHeader(new Intl.NumberFormat().format(data.recovered), 'Recovered: ');
    })
    .catch(function (err) {
        // Make the alert visisble
        alert.classList.replace('d-none', 'd-block');
        console.error(err);
    });

// Web API to display Coronavirus statistics, same source as Samuel Hernadez's on map.
// This fetch casts a wider net to get the case numbers for each individual country.
// Function designs inspired by Samuel Hernadez's implementation in map.html
async function fetchData() {
    const response = await fetch('https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest')
        .catch(function (err) {
            // Make the alert visisble
            alert.classList.replace('d-none', 'd-block');
            console.error(err);
        });
    if (!response.ok) {
        // Make the alert visible
        alert.classList.replace('d-none', 'd-block');
    }
    const data = response.json();
    return data;
}

// Displays the list of countries and their confirmed cases
// Takes no arguments, creates an unordered list and calls createListItem.
async function displayData() {
    const data = await fetchData();

    let countryHeader = document.createElement('h3');
    countryHeader.textContent = 'Cases by Country:';
    countryHeader.classList.add('countryHeader');
    worldCaseCount.appendChild(countryHeader);

    let list = document.createElement('ul');
    list.classList.add('countryList');
    data.forEach(function (item) {
        list.appendChild(createListItem(item));
    });
    worldCaseCount.appendChild(list);
}

// Removes the data when the button is toggled.
function removeData() {
    worldCaseCount.removeChild(document.querySelector('.countryList'));
    worldCaseCount.removeChild(document.querySelector('.countryHeader'));
}

// function to create list items containing all countries and cases.
// Takes two arguments, one for country name, the other for number of cases.
// Returns a list item to be appended to the unordered list.
function createListItem({ confirmed, provincestate, countryregion }) {
    let listItem = document.createElement('li');
    listItem.textContent = countryregion + ' - ' + provincestate + ': ' + new Intl.NumberFormat().format(confirmed);

    return listItem;
}