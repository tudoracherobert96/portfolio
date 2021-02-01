import React from "react";
import Error from "./Error";
import { configure, shallow, callback, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Error tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Error />);
  });

  test("render the title", () => {
    expect(wrapper.find("div").length).toBe(1);
    expect(wrapper.find("div").text()).toBe("Error page");
  });
});
