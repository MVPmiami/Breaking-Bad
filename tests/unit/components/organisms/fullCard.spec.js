import React from "react";
import FullCard from "../../../../src/components/organisms/FullCard/component";

const setUp = (props) => shallow(<FullCard {...props} />);

describe("should render FullCard component", () => {
  let component;
  let person = [
    {
      char_id: 1,
      name: "Walter White",
      birthday: "09-07-1958",
      occupation: ["High School Chemistry Teacher", "Meth King Pin"],
      img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
      status: "Presumed dead",
      nickname: "Heisenberg",
      appearance: [1, 2, 3, 4, 5],
      portrayed: "Bryan Cranston",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ];
  let isLoader = false;
  let isError = false;
  let randomQuote = "test";
  beforeEach(() => {
    component = setUp({ person, isLoader, isError, randomQuote });
  });

  it("should contain .wrapper ", () => {
    expect(component).toMatchSnapshot();
  });
});

describe("should render FullCard component with ErrorMessage", () => {
  let component;
  let isError = true;
  beforeEach(() => {
    component = setUp({ isError });
  });

  it("should contain ErrorMessage ", () => {
    expect(component).toMatchSnapshot();
  });
});

describe("should render FullCard component with Loader", () => {
  let component;
  let isError = false;
  let isLoader = true;
  let randomQuote = "test";
  beforeEach(() => {
    component = setUp({ isError, isLoader, randomQuote });
  });

  it("should contain Loader ", () => {
    expect(component).toMatchSnapshot();
  });
});

describe("should render FullCard component with randomQuote", () => {
  let component;
  let isError = false;
  let isLoader = false;
  let person = [
    {
      char_id: 1,
      name: "Walter White",
      birthday: "09-07-1958",
      occupation: ["High School Chemistry Teacher", "Meth King Pin"],
      img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
      status: "Presumed dead",
      nickname: "Heisenberg",
      appearance: [1, 2, 3, 4, 5],
      portrayed: "Bryan Cranston",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ];
  let randomQuote = "test";
  beforeEach(() => {
    component = setUp({ person, isLoader, isError, randomQuote });
  });

  it("should contain randomQuote ", () => {
    expect(component).toMatchSnapshot();
  });
});
