import React from "react";
import Footer from "../../../../src/components/molecules/Footer";

const setUp = (props) => shallow(<Footer {...props} />);

describe("should render Footer component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .cardWrapper wrapper", () => {
    const wrapper = component.find("footer");
    expect(wrapper.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
