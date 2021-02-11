import React from "react";
import Wallet from "./Wallet";
import { configure, shallow, callback, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { VendingProvider } from "./Context/VendingContext";
configure({ adapter: new Adapter() });

describe("CoverLetter tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <VendingProvider>
        <Wallet />
      </VendingProvider>
    );
  });

  test("render the header", () => {
    expect(wrapper.find("h5").length).toBe(1);
  });
  test("render the input", () => {
    expect(wrapper.find("input").length).toBe(1);
  });
  test("render the table body", () => {
    expect(wrapper.find("tbody").length).toBe(1);
  });
  test("render the table rows", () => {
    expect(wrapper.find("tr").length).toBe(4);
  });
  test("render the columns", () => {
    expect(wrapper.find("td").length).toBe(12);
  });
  test("press button", () => {
    document.body.innerHTML = `
      <input id="inputCode" value="1"></input>`;
    wrapper.find("#pay").simulate("click");
    expect(wrapper.find("#inputCode").text()).toBe("");
  });
});
