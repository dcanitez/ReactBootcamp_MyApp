import React, { FC } from "react";
import { LoginForm } from "../../components/forms";
import { LoginFormProps } from "../../components/forms/LoginForm/LoginForm.types";
import { LoginPageProps } from "./LoginPage.types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LoginPage: FC<LoginPageProps> = (props) => {
  const navigate = useNavigate();

  const handleLogin: LoginFormProps["onLogin"] = (values) => {
    axios.post("http://localhost:80/auth/login", values).then((res) => {
      console.log(res);
      if (res.status === 200) {
        props.onSuccess?.(res.data.token);
        navigate("/");
      }
    });
  };
  return (
    <div style={{ marginTop: "10vh" }}>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
