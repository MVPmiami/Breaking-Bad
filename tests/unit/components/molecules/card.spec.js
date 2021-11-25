import React from "react";
import Card from "../../../../src/components/molecules/Card";

const setUp = (props) => shallow(<Card {...props} />);

describe("should render PageNumberBtn component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .cardWrapper wrapper", () => {
    const wrapper = component.find(".cardWrapper");
    expect(wrapper.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
