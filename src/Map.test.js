import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { act } from 'react-dom/test-utils';
import { render } from 'react-dom';

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
        // Add some data here, like const data = {};

        jest.spynOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(data)
            })
        );
        await act(async () => {
            render(<Map />, container);
        });

        // Write your test here, like expect( this should be ).toBe( this )
        global.fetch.mockRestore();
    })

})
