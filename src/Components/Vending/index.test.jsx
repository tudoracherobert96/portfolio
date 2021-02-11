import React from "react";
import VendingMachine from "./index";
import { configure, shallow, callback, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { VendingProvider } from "./Context/VendingContext";
configure({ adapter: new Adapter() });

describe("CoverLetter tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <VendingProvider>
        <VendingMachine />
      </VendingProvider>
    );
  });

  test("render the header", () => {
    expect(wrapper.find("h5").length).toBe(2);
  });
  test("press button", () => {
    document.body.innerHTML = `
      <input id="inputCode" value="1"></input>`;
    wrapper.find("#pay").simulate("click");
    expect(wrapper.find("#inputCode").text()).toBe("");
    expect(wrapper.find("[test-id=1]").text()).toBe("Quantity : 1");
  });
});
