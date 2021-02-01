import React from "react";
import NavBar from "./NavBar";
import { configure, shallow, callback, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("NavBar Testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  test("render the title", () => {
    expect(wrapper.find("#navbar").length).toBe(1);
  });
});
