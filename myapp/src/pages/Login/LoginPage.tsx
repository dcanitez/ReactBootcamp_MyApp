import React from "react";
import { LoginForm } from "../../components/forms";

const LoginPage = () => {
  const handleLogin = () => {
    console.log("login fnc");
  };
  return (
    <div style={{ marginTop: "10vh" }}>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
