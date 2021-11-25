import React from "react";
import Loader from "../../../../src/components/atoms/Loader";

const setUp = (props) => shallow(<Loader {...props} />);

describe("should render Loader component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .ldsEllipsis wrapper", () => {
    const wrapper = component.find(".ldsEllipsis");
    expect(wrapper.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
