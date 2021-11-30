import React from "react";
import Catalog from "../../../../src/components/pages/Catalog";

const setUp = (props) => shallow(<Catalog {...props} />);

describe("should render Catalog component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .catalogPage wrapper", () => {
    const wrapper = component.find(".catalogPage");
    expect(wrapper.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
