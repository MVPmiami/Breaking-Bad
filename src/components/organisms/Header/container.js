import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./component";
import { changeCatalogBtnStatus } from "./../../../store/actions/catalogBtn";

export const HeaderContainer = () => {
  const dispatch = useDispatch();
  window.location.pathname === "/catalog"
    ? dispatch(changeCatalogBtnStatus(true))
    : dispatch(changeCatalogBtnStatus(false));

  const isActiveBtn = useSelector(
    (state) => state.catalogBtnReducer.catalogBtnIsActive
  );

  return <Header isActiveBtn={isActiveBtn} />;
};

export const container = HeaderContainer;
