import React, { FC } from "react";
import { Styled } from "./Navbar.styled";
import { NavLink, useNavigate } from "react-router-dom";
import { NavbarProps } from "./Navbar.types";

const Navbar: FC<NavbarProps> = (props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    props.onLoggedOut?.();
    navigate("/");
  };

  return (
    <Styled>
      <ul>
        <NavLink to="/">Home</NavLink>
        {!props.isLoggedIn ? (
          <NavLink to="/login">Sign In</NavLink>
        ) : (
          <>
            <NavLink to="/change-password">Change Password</NavLink>
            <NavLink to="/todos">Todo's</NavLink>
            <button
              onClick={handleLogout}
              className="logout-btn material-symbols-outlined"
              title="logout">
              <span>logout</span>
            </button>
          </>
        )}
      </ul>
    </Styled>
  );
};

export default Navbar;
