import React from "react";
import AddMoney from "./AddMoney";
import { configure, shallow, callback, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { VendingProvider } from "./Context/VendingContext";
configure({ adapter: new Adapter() });

describe("CoverLetter tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <VendingProvider>
        <AddMoney />
      </VendingProvider>
    );
  });

  test("render the input", () => {
    expect(wrapper.find("#inputMoney").length).toBe(1);
  });
  test("render the button", () => {
    expect(wrapper.find("#btnAddMoney").length).toBe(1);
  });
  test("render the button text", () => {
    expect(wrapper.find("#btnAddMoney").text()).toBe("Add money");
  });
  test("render the money amount", () => {
    expect(wrapper.find("h5").text()).toBe("Money : 100");
  });
  test("press button", () => {
    document.body.innerHTML = `
      <input id="inputMoney" value="100"></input>`;
    wrapper.find("#btnAddMoney").simulate("click");
    expect(wrapper.find("h5").text()).toBe("Money : 200");
  });
});
