import React, { Component } from 'react';
import { act } from 'react-dom/test-utils';
import { render } from 'react-dom';

import Map from './components/Map.js';

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});


afterEach(() => {
    // cleanup on exiting
    
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe("Content and HTML is valid.", () => {

    test("Map renders", async () => {
        const data = [{
            "updated": 1605903275994,
            "country": "Afghanistan",
            "countryInfo": { "_id": 4, "iso2": "AF", "iso3": "AFG", "lat": 33, "long": 65, "flag": "https://disease.sh/assets/img/flags/af.png" },
            "cases": 44443,
            "todayCases": 215,
            "deaths": 1661,
            "todayDeaths": 11,
            "recovered": 35370,
            "todayRecovered": 20,
            "active": 7412,
            "critical": 93,
            "casesPerOneMillion": 1132,
            "deathsPerOneMillion": 42,
            "tests": 139070,
            "testsPerOneMillion": 3542,
            "population": 39261575,
            "continent": "Asia",
            "oneCasePerPeople": 883,
            "oneDeathPerPeople": 23637,
            "oneTestPerPeople": 282,
            "activePerOneMillion": 188.79,
            "recoveredPerOneMillion": 900.88,
            "criticalPerOneMillion": 2.37
        }];

        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(data)
            })
        );
        await act(async () => {
            render(<Map />, container);
        });

        expect(<Map />).toBeDefined();
        global.fetch.mockRestore();
    })
})