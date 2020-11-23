import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
// Testing structure inspired by and from https://reactjs.org/docs/testing-recipes.html

import About from "./components/About.js";

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

    test("Four cards are present.", () => {
        act(() => {
            render(<About />, container)
        })
        // Expect four cards to be present.
        expect(container.querySelectorAll(".card-column").length).toEqual(4);
    })
})