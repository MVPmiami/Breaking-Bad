import React from "react";
import Person from "../../../../src/components/pages/Person/component";

const setUp = (props) => shallow(<Person {...props} />);

describe("should render Person component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .currentPage wrapper", () => {
    const wrapper = component.find(".currentPage");
    expect(wrapper.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
