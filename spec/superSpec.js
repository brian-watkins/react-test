import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

var renderApp = () => {
  var div = document.querySelector("#react-test-app")
  if (!div) {
    div = document.createElement('div');
    div.id = "react-test-app"
    document.querySelector("body").appendChild(div)  
  }
  ReactDOM.render(<App />, div);
}

var wait = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1)
  })
}

function setNativeValue(element, value) {
  const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
  const prototype = Object.getPrototypeOf(element);
  const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;
  
  if (valueSetter && valueSetter !== prototypeValueSetter) {
  	prototypeValueSetter.call(element, value);
  } else {
    valueSetter.call(element, value);
  }
}

describe("super stuff", () => {
  beforeEach(async () => {
    await wait()
    renderApp()
    await wait()
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(document.querySelector("#react-test-app"));
  })

  it("does something", () => {
    var intro = document.querySelector(".App-intro")
    expect(intro.textContent).toContain("get started")
  })

  it("handles an input event", () => {
    var input = document.querySelector("input")
    setNativeValue(input, "blah")
    input.dispatchEvent(new Event('change', {'bubbles': true, 'cancelable': true}))

    var output = document.querySelector("#output")
    expect(output.textContent).toEqual("You wrote: blah")
  })
})