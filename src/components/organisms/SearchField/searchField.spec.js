import React from "react";
import SearchField from "../../../../src/components/organisms/SearchField/component";

const setUp = (props) => shallow(<SearchField {...props} />);

describe("should render Toogle component", () => {
  let component;
  let searchName = jest.fn();
  let searchPersons = jest.fn();
  let name = "Walter";
  beforeEach(() => {
    component = setUp({ searchName, name, searchPersons });
  });

  it("should contain .headerCatalog wrapper", () => {
    const wrapper = component.find(".wrapper");
    expect(wrapper.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
