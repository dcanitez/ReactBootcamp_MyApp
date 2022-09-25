import React, { FC } from "react";
import { Styled } from "./Navbar.styled";
import { NavLink } from "react-router-dom";

const Navbar: FC<any> = (props) => {
  return (
    <Styled>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Sign In</NavLink>
      </ul>
    </Styled>
  );
};

export default Navbar;
