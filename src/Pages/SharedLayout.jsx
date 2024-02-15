import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/Header/NavBar";
// import Footer from "../Components/Footer/Footer";
function SharedLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default SharedLayout;
