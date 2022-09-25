import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../../components/forms";
import { RegisterFormProps } from "../../components/forms/RegisterForm/RegisterForm.types";

const RegisterPage = () => {
  const navigate = useNavigate();
  const handleRegister: RegisterFormProps["onRegister"] = (values) => {
    axios
      .post("http://localhost:80/auth/register", values)
      .then((res) => {
        if (res.status === 200) {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ marginTop: "10vh" }}>
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
};

export default RegisterPage;
