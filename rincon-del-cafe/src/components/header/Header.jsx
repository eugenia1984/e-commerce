import { AppBar } from "@mui/material";
import React from "react";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

const Header = () => {
  return (
    <>
      <AppBar position="static"
        color="primary"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Navbar />
      </AppBar>
    </>
  );
};

export { Header };
