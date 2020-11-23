import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
// Testing structure inspired by and from https://reactjs.org/docs/testing-recipes.html

import { WorldStats, LastUpdate, CasesByCountry, TableHeader, TableRow } from "./components/Cases.js";

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

    test("Main headings from WorldStats render.", async () => {
        const data = [{
            lastupdate: "2020-02-29T07:21:21.001Z",
        }];

        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(data)
            })
        );

        await act(async () => {
            render(<WorldStats />, container);
        });
        // Expect main heading to be present.
        expect(container.querySelector("h1").textContent).toBe("Global Coronavirus Statistics");
        // Expect citation to be present.
        expect(container.querySelector("p").textContent).toBe("Data from Laeyoung COVID-19-API.");
        // Expect minor headings to be present.
        expect(container.querySelectorAll("h3").length).toEqual(3);

        // remove the mock to ensure tests are completely isolated 
        global.fetch.mockRestore();
    })

    test("LastUpdate gets and formats date.", async () => {
        const data = [{
            lastupdate: "2020-02-29T07:21:21.001Z"
        }];

        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(data)
            })
        );

        await act(async () => {
            render(<LastUpdate />, container)
        })
        // Expect correct date.
        const options = { year: "numeric", month: "long", day: "numeric" };
        expect(container.querySelector("h2").textContent).toBe("Last update: " + new Date(data[0].lastupdate).toLocaleDateString("en-US", options));

        // remove the mock to ensure tests are completely isolated  
        global.fetch.mockRestore();
    })
})