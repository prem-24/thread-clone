// import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Feeds from "../features/feeds/Feeds";
import Search from "./components/Search";
import Create from "./components/Create";
// import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import Profile from "./Profile";
import Notification from "./components/Notification";
import Navbarmobile from "./components/Navbarmobile";
import ProfilePage from "./components/ProfilePage";
import { Navigate } from "react-router-dom";
import { selectUserData } from "../features/user/userSlice";

const Home = () => {
  // const usertoken = useSelector(token);

  const nav = useSelector((state) => state.menu.menu);
  console.log(nav)
  const userData = useSelector(selectUserData);

  // const storedToken = localStorage.getItem("authToken");

  // console.log(storedToken);
  // const dispatch = useDispatch();

  useEffect(() => {
    userData &&
      userData.token !== null &&
      localStorage.setItem("authToken", userData.token);
    // move(true);
  }, [userData]);

  // console.log(userData);

  const navbarHeight = 60; // Adjust this value based on your actual navbar height

  return (
    <>
      {!userData ? <Navigate to="/login" replace={true}></Navigate> : null}
      {/* {console.log({ userData })} */}
      <div>
        <div
          style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
          className="bg-black"
        >
          <Navbar />
        </div>
        <div style={{ paddingTop: navbarHeight, paddingBottom: navbarHeight }}>
          {/* Add padding top and bottom equal to the height of the navbar */}
          <div className="md:grid md:grid-cols-3">
            <div></div>
            {nav === "home" ? (
              <Feeds />
           
            ) : nav === "profile" ? (
              <ProfilePage />
            ) : nav === "search" ? (
              <Search />
            ) : nav === "notification" ? (
              <Notification />
            ) : (
              <Create />
            )}
            <div></div>
          </div>
        </div>
        <div
          style={{ position: "fixed", bottom: 0, width: "100%", zIndex: 1000 }}
        >
          <div className="md:hidden flex justify-center bg-black">
            <Navbarmobile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
