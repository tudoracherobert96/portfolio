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
    expect(wrapper.find("h5").length).toBe(1);
  });
  test("press button", () => {
    document.body.innerHTML = `
      <input id="inputCode" value="1"></input>`;
    wrapper.find("#pay").simulate("click");
    expect(wrapper.find("#inputCode").text()).toBe("");
    expect(wrapper.find("[test-id=1]").text()).toBe("Quantity : 1");
    wrapper.find("[test-id='btnOpenWallet']").simulate("click");
    expect(wrapper.find("td").length).toBe(1);
    wrapper.find("[test-id='btnOpenWallet']").simulate("click");
  });
  test("go to cart", () => {
    expect(wrapper.find("[test-id='btnOpenWallet']").text()).toBe("Add Money");
    wrapper.find("[test-id='btnOpenWallet']").simulate("click");
    expect(wrapper.find("[test-id='btnOpenWallet']").text()).toBe("Buy Items");
  });
  test("go to cart 2", () => {
    expect(wrapper.find("[test-id='walletHeader']").length).toBe(1);
    expect(wrapper.find("[test-id='addMoneyHeader']").length).toBe(0);
    wrapper.find("[test-id='btnOpenWallet']").simulate("click");
    expect(wrapper.find("[test-id='walletHeader']").length).toBe(0);
    expect(wrapper.find("[test-id='addMoneyHeader']").length).toBe(1);
  });
  test("Vending table + wallet tr", () => {
    expect(wrapper.find("tr").length).toBe(8);
  });
  test("Vending table + wallet td", () => {
    expect(wrapper.find("td").length).toBe(23);
  });
  test("check money", () => {
    document.body.innerHTML = `
      <input id="inputCode" value="1"></input>`;
    wrapper.find("#pay").simulate("click");
    expect(wrapper.find("#inputCode").text()).toBe("");
    expect(wrapper.find("[test-id='walletHeader']").text()).toBe("Money : 96");
  });
  test("check add money", () => {
    expect(wrapper.find("[test-id='walletHeader']").text()).toBe("Money : 100");
    expect(wrapper.find("[test-id='addMoneyHeader']").length).toBe(0);
    wrapper.find("[test-id='btnOpenWallet']").simulate("click");
    document.body.innerHTML = `
      <input id="inputMoney" value="10"></input>`;
    wrapper.find("#btnAddMoney").simulate("click");
    expect(wrapper.find("[test-id='walletHeader']").length).toBe(0);
    expect(wrapper.find("[test-id='addMoneyHeader']").text()).toBe(
      "Money : 110"
    );
  });
});
