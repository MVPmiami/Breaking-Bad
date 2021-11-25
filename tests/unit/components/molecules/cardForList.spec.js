import React from "react";
import CardForList from "../../../../src/components/molecules/CardForList";

const setUp = (props) => shallow(<CardForList {...props} />);

describe("should render CardForList component", () => {
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
