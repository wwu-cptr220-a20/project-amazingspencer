import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
// Testing structure inspired by and from https://reactjs.org/docs/testing-recipes.html

import { Header, Overview, Origin, Symptoms, Care, Timeline } from "./components/Home.js";

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

  test("Heading renders", () => {
    act(() => {
      render(<Header />, container);
    });
    // Expect correct headings to appear.
    expect(container.querySelector("h1").textContent).toBe("Coronavirus (COVID-19)");
    expect(container.querySelector("h2").textContent).toBe("The pandemic of our time.");
  })

  test("Overview section is present.", () => {
    act(() => {
      render(<Overview />, container);
    });
    // Expect correct heading to appear.
    expect(container.querySelector("h2").textContent).toBe("Overview");
    // Expect image to contain the correct image.
    expect(container.querySelector("img").getAttribute("src")).toEqual("covid-19.jpg");
  })

  test("Origin section is present.", () => {
    act(() => {
      render(<Origin />, container);
    })
    // Expect correct heading to appear.
    expect(container.querySelector("h2").textContent).toBe("Origin");
  })

  test("Symptoms section is present.", () => {
    act(() => {
      render(<Symptoms />, container);
    })
    // Expect correct heading to appear.
    expect(container.querySelector("h2").textContent).toBe("Symptoms");
  })

  test("Care section is present.", () => {
    act(() => {
      render(<Care />, container);
    })
    // Expect correct heading to appear.
    expect(container.querySelector("h2").textContent).toBe("Taking Care of Yourself");
    // Expect image to contain the correct image.
    expect(container.querySelector("img").getAttribute("src")).toEqual("washing-hands.jpg");
  })

  test("Timeline section is present.", () => {
    act(() => {
      render(<Timeline />, container);
    })
    // Expect correct heading to appear.
    expect(container.querySelector("h2").textContent).toBe("Timeline of the Coronavirus");
    // Expect image to contain the correct image.
    expect(container.querySelector("img").getAttribute("src")).toEqual("flags.jpg");
  })
})