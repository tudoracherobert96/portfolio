import React from "react";
import About from "./About";
import { configure, shallow, callback, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("About tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<About />);
  });

  test("render the title", () => {
    expect(wrapper.find("div").length).toBe(1);
    expect(wrapper.find("div").text()).toBe("About page");
  });
});
