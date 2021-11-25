import React from "react";
import ArrowNavigation from "./../../../../src/components/atoms/ArrowNavigation";

const setUp = (props) => shallow(<ArrowNavigation {...props} />);

describe("should render ArrowNavigation component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .arrowNavigation wrapper", () => {
    const wrapper = component.find(".arrowNavigation");
    expect(wrapper.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it("should call callback of arrowBtnLeft", () => {
    const onBtnClick = jest.fn();
    const wrapper = shallow(
      <ArrowNavigation paginateToPrevPage={onBtnClick} />
    );
    wrapper.find(".arrowLeft").simulate("click");
    expect(onBtnClick).toHaveBeenCalled();
  });

  it("should call callback of arrowBtnRight", () => {
    const onBtnClick = jest.fn();
    const wrapper = shallow(
      <ArrowNavigation paginateToNextPage={onBtnClick} />
    );
    wrapper.find(".arrowRight").simulate("click");
    expect(onBtnClick).toHaveBeenCalled();
  });
});
