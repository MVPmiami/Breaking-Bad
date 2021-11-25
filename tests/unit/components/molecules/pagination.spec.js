import React from "react";
import Pagination from "../../../../src/components/molecules/Pagination";

const setUp = (props) => shallow(<Pagination {...props} />);

describe("should render Pagination component", () => {
  let component;
  let totalPersons = 50;
  let personPerPage = 10;
  let currentPage = 1;
  let paginateToNextPage = jest.fn();
  let paginateToPrevPage = jest.fn();
  let changeAmountCards = jest.fn();
  beforeEach(() => {
    component = setUp({
      totalPersons,
      personPerPage,
      currentPage,
      paginateToNextPage,
      paginateToPrevPage,
      changeAmountCards,
    });
  });

  it("should contain .cardWrapper wrapper", () => {
    expect(component).toMatchSnapshot();
  });
});
