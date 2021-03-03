import React from "react";

import Sidebar from "../components/Sidebar"
import AppBar from "../components/AppBar"

const Layout = () => {
  return (
    <div
      style={{
        position: "relative",
        top: 0,
        height: "100vh",
      }}
    >
      <Sidebar />
      <AppBar />
    </div>
  );
};

export default Layout;
