import React from "react";
import { Link } from "react-router-dom";

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
    <nav>
      <ul>
        {urls.map((link) => {
          return (
            <li>
              <Link to={link.url}> {link.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { Navbar };
