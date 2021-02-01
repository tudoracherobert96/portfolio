import React from "react";
import Home from "./Home";
import { configure, shallow, callback, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Home tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  test("render the title", () => {
    expect(wrapper.find("div").length).toBe(1);
    expect(wrapper.find("div").text()).toBe("Home page");
  });
});
