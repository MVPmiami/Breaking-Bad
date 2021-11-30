import React from "react";
import ErrorMessage from "./../../../../src/components/atoms/Error";

const setUp = (props) => shallow(<ErrorMessage {...props} />);

describe("should render ErrorMessage component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .errorMessage wrapper", () => {
    const wrapper = component.find(".errorMessage");
    expect(wrapper.length).toBe(1);
  });

  it("should render create message", () => {
    const messege = "messege for test";
    component = setUp({ messege });
    const wrapper = component.find(".errorMessage");
    expect(wrapper.text()).toBe("messege for test");
  });
});
