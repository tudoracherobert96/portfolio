import React from "react";
import Vending from "./Vending";
import { configure, shallow, callback, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { VendingProvider } from "./Context/VendingContext";
configure({ adapter: new Adapter() });

describe("CoverLetter tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <VendingProvider>
        <Vending />
      </VendingProvider>
    );
  });

  test("render the table body", () => {
    expect(wrapper.find("tbody").length).toBe(1);
  });
  test("render the table rows", () => {
    expect(wrapper.find("tr").length).toBe(4);
  });
  test("render the columns", () => {
    expect(wrapper.find("td").length).toBe(11);
  });
});
