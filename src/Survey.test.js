import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
// Testing structure inspired by and from https://reactjs.org/docs/testing-recipes.html

import SurveyQuestion from "./components/Survey.js";

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

    test("Top heading is present.", () => {
        act(() => {
            render(
                <MemoryRouter>
                    <SurveyQuestion />
                </MemoryRouter>, container)
        });
        // Expect heading to be present.
        expect(container.querySelector("h1").textContent).toBe("Coronavirus Personal Survey");
        // Expect instructions are present.
        expect(container.querySelector("p").textContent).toBe("Welcome! To begin, click on \"Begin Survey!,\" to restart click the button again.")
    })
})