import React from "react";
import CoverLetter from "./CoverLetter";
import { configure, shallow, callback, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("CoverLetter tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CoverLetter />);
  });

  test("render the title", () => {
    expect(wrapper.find("div").length).toBe(1);
    expect(wrapper.find("div").text()).toBe("Cover Letter page");
  });
});
