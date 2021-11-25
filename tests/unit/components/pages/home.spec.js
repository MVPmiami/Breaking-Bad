import React from "react";
import Home from "../../../../src/components/pages/Home";

const setUp = (props) => shallow(<Home {...props} />);

describe("should render Home component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .homePage wrapper", () => {
    const wrapper = component.find(".homePage");
    expect(wrapper.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
