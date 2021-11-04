import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
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
