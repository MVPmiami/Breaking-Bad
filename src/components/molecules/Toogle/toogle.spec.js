import React from "react";
import Toogle from "../../../../src/components/molecules/Toogle";

const setUp = (props) => shallow(<Toogle {...props} />);

describe("should render Toogle component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .headerCatalog wrapper", () => {
    const wrapper = component.find(".headerCatalog");
    expect(wrapper.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it("rectangle1 should contain .active class", () => {
    component = setUp({ isList: true });
    const wrapper = component.find(".active");
    expect(wrapper.length).toBe(2);
  });
});
