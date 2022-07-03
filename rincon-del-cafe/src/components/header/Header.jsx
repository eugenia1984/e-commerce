import { AppBar } from "@mui/material";
import React from "react";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

const Header = () => {
  return (
    <>
      <AppBar
        color="primary"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Logo />
        <Navbar />
      </AppBar>
    </>
  );
};

export { Header };
