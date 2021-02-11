import React from "react";
import Vending from "./Vending";
import { configure, shallow, callback, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { VendingProvider } from "./Context/VendingContext";
configure({ adapter: new Adapter() });

describe("CoverLetter tests", () => {
  let wrapper;
  let wrapperFalseProp;

  beforeEach(() => {
    wrapper = mount(
      <VendingProvider>
        <Vending wallet={true} />
      </VendingProvider>
    );
    wrapperFalseProp = mount(
      <VendingProvider>
        <Vending wallet={false} />
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

  test("render the table body false props", () => {
    expect(wrapperFalseProp.find("tbody").length).toBe(1);
  });

  test("render the table rows false props", () => {
    expect(wrapperFalseProp.find("tr").length).toBe(0);
  });
  test("render the columns false props", () => {
    expect(wrapperFalseProp.find("td").length).toBe(0);
  });
});
