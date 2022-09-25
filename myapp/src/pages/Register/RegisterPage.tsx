import React from "react";
import { RegisterForm } from "../../components/forms";

const RegisterPage = () => {
  const handleRegister = () => {
    console.log("registered");
  };
  return (
    <div style={{ marginTop: "10vh" }}>
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
};

export default RegisterPage;
