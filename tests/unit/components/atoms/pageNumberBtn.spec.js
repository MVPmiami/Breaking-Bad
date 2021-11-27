import React from "react";
import PageNumberBtn from "../../../../src/components/atoms/PageNumberBtn";

const setUp = (props) => shallow(<PageNumberBtn {...props} />);

describe("should render PageNumberBtn component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .pageElement wrapper", () => {
    const wrapper = component.find(".pageElement");
    expect(wrapper.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it("pageElement should contain .active class", () => {
    const wrapper = shallow(<PageNumberBtn currentPage={1} numberPage={2} />);
    wrapper.find(".active");
    expect(wrapper.length).toBe(1);
  });

  it("should call callback of pageElement", () => {
    const onBtnClick = jest.fn();
    const wrapper = shallow(<PageNumberBtn paginate={onBtnClick} />);
    wrapper.find(".pageElement").simulate("click");
    expect(onBtnClick).toHaveBeenCalled();
  });
});
