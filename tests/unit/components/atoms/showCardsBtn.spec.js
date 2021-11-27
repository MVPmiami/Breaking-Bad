import React from "react";
import ShowCardsBtn from "../../../../src/components/atoms/ShowCardsBtn";

const setUp = (props) => shallow(<ShowCardsBtn {...props} />);

describe("should render ShowCardsBtn component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .amountCards wrapper", () => {
    const wrapper = component.find(".amountCards");
    expect(wrapper.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it("pageElement should contain .active class", () => {
    const wrapper = shallow(<ShowCardsBtn personPerPage={1} amount={2} />);
    wrapper.find(".active");
    expect(wrapper.length).toBe(1);
  });

  it("should call callback of amountCards", () => {
    const onBtnClick = jest.fn();
    const wrapper = shallow(<ShowCardsBtn changeAmountCards={onBtnClick} />);
    wrapper.find(".amountCards").simulate("click");
    expect(onBtnClick).toHaveBeenCalled();
  });
});
