import React, { FC, useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import LoginPage from "./pages/Login";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RegisterPage from "./pages/Register";
import Todo from "./pages/Todo";
import ChangePassword from "./pages/ChangePassword";
import { LoginPageProps } from "./pages/Login/LoginPage.types";
import { NavbarProps } from "./components/Navbar/Navbar.types";

const NavbarContainer: FC<NavbarProps> = (props) => {
  return (
    <>
      <Navbar isLoggedIn={props.isLoggedIn} onLoggedOut={props.onLoggedOut} />
      <Outlet />
    </>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");

  const handleLogin: LoginPageProps["onSuccess"] = (token) => {
    setIsLoggedIn(true);
    setToken(token);
    localStorage.setItem("token", JSON.stringify(token));
  };

  const handleLogout: NavbarProps["onLoggedOut"] = () => {
    localStorage.removeItem("token");
    setToken("");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const value = localStorage.getItem("token");
    if (value) {
      setToken(JSON.parse(value));
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  return (
    <Router>
      <Routes>
        <Route
          element={
            <NavbarContainer onLoggedOut={handleLogout} {...{ isLoggedIn }} />
          }>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<LoginPage onSuccess={handleLogin} />}
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/change-password"
            element={<ChangePassword {...{ token }} />}
          />
          {isLoggedIn ? <Route path="/todos" element={<Todo />} /> : null}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
