import React from "react";
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

const NavbarContainer = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<NavbarContainer />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/todos" element={<Todo />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
