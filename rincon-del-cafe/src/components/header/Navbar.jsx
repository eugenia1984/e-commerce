import React from "react";
import { Link } from "react-router-dom";

import { Toolbar } from "@mui/material";

const Navbar = () => {
  const urls = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Products",
      url: "/products",
    },
  ];
  return (
    <Toolbar
      component="nav"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <ul>
        {urls.map((link) => {
          return (
            <li>
              <Link to={link.url}> {link.name}</Link>
            </li>
          );
        })}
      </ul>
    </Toolbar>
  );
};

export { Navbar };
