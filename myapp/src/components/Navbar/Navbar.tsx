import React, { FC } from "react";
import { Styled } from "./Navbar.styled";
import { NavLink, useNavigate } from "react-router-dom";
import { NavbarProps } from "./Navbar.types";
import { useLoginContext } from "../../contexts/LoginContext/LoginContext";

const Navbar: FC<NavbarProps> = (props) => {
  const navigate = useNavigate();
  const { isLoggedIn, username, logout } = useLoginContext();
  const handleLogout = () => {
    // props.onLoggedOut?.();
    logout();
    navigate("/");
  };

  return (
    <Styled>
      <ul>
        <NavLink to="/">Home</NavLink>
        {!isLoggedIn ? (
          <NavLink to="/login">Sign In</NavLink>
        ) : (
          <>
            <NavLink to="/change-password">Change Password</NavLink>
            <NavLink to="/todos">Todo's</NavLink>
            {isLoggedIn ? (
              <span className="welcome-span">Welcome {username}!</span>
            ) : null}

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
