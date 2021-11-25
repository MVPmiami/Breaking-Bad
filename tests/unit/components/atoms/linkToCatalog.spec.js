import React from "react";
import LinkToCatalog from "../../../../src/components/atoms/LinkToCatalog";

const setUp = (props) => shallow(<LinkToCatalog {...props} />);

describe("should render linkToCatalog component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .currentPage wrapper", () => {
    const wrapper = component.find(".currentPage");
    expect(wrapper.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it("should contain .linkToCatalog wrapper", () => {
    const wrapper = component.find(".linkToCatalog");
    expect(wrapper.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it("should call calback cleanData of arrowBack", () => {
    const onBtnClick = jest.fn();
    const wrapper = shallow(<LinkToCatalog cleanData={onBtnClick} />);
    wrapper.find(".arrowBack").simulate("click");
    expect(onBtnClick).toHaveBeenCalled();
  });

  it("should call calback cleanData of p", () => {
    const onBtnClick = jest.fn();
    const wrapper = shallow(<LinkToCatalog cleanData={onBtnClick} />);
    wrapper.find("p").simulate("click");
    expect(onBtnClick).toHaveBeenCalled();
  });
});
