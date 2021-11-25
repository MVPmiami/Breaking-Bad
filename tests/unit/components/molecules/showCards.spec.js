import React from "react";
import ShowCards from "./../../../../src/components/molecules/ShowCards";

const setUp = (props) => shallow(<ShowCards {...props} />);

describe("should render ShowCards component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .header wrapper", () => {
    const wrapper = component.find(".header");
    expect(wrapper.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
