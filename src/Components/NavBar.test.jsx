import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
  test("render the home", () => {
    expect(wrapper.find("#home").length).toBe(1);
  });
  test("render the about me", () => {
    expect(wrapper.find("#about").length).toBe(1);
  });
  test("render the cv", () => {
    expect(wrapper.find("#cv").length).toBe(1);
  });
  test("render the contact", () => {
    expect(wrapper.find("#contact").length).toBe(1);
  });
  test("render 4 options", () => {
    expect(wrapper.find(".nav-link").length).toBe(5);
  });
});
