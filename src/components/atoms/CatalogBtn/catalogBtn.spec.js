import React from "react";
import CatalogBtn from "../../../../src/components/atoms/CatalogBtn";

const setUp = (props) => shallow(<CatalogBtn {...props} />);

describe("should render CatalogBtn component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .btnWrapper wrapper", () => {
    const wrapper = component.find(".btnWrapper");
    expect(wrapper.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it(".btnWrapper should contain .active class", () => {
    component = shallow(<CatalogBtn isActiveBtn={true} />);
    const wrapper = component.find(".active");
    expect(wrapper.length).toBe(1);
  });
});
