import React, { FC } from "react";
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
import { NavbarProps } from "./components/Navbar/Navbar.types";
import {
  LoginProvider,
  useLoginContext,
} from "./contexts/LoginContext/LoginContext";

const NavbarContainer: FC<NavbarProps> = (props) => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const App = () => {
  const { isLoggedIn } = useLoginContext();

  // const handleLogout: NavbarProps["onLoggedOut"] = () => {
  //   localStorage.removeItem("token");
  //   setToken("");
  //   setIsLoggedIn(false);
  // };

  return (
    <LoginProvider>
      <Router>
        <Routes>
          <Route element={<NavbarContainer />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/change-password" element={<ChangePassword />} />
            {isLoggedIn ? <Route path="/todos" element={<Todo />} /> : null}
          </Route>
        </Routes>
      </Router>
    </LoginProvider>
  );
};

export default App;
