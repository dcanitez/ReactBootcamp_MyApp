import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Card from "../Card";
import Checkbox from "../Checkbox";
import Input from "../Input";
import { InputProps } from "../Input/Input.types";
import { Styled } from "./LoginForm.styled";
import { LoginFormProps, LoginFormValuesProps } from "./LoginForm.types";

const LoginForm: FC<LoginFormProps> = (props) => {
  const [formValues, setFormValues] = useState<LoginFormValuesProps>({
    username: "",
    password: "",
  });

  const handleChange: InputProps["onChange"] = (e, val) => {
    const name = e.target.name;
    setFormValues((prev) => ({ ...prev, [name]: val }));
  };

  return (
    <Styled>
      <Card title="Login">
        <Input
          type="text"
          name="username"
          placeholder="Enter your username"
          icon="person"
          value={formValues.username}
          style={{ marginBottom: "1rem" }}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
          icon="key"
          value={formValues.password}
          style={{ marginBottom: "1rem" }}
          onChange={handleChange}
        />
        <div className="forgot-password">
          <Checkbox label="Remember me" />
          <span className="link">Forgot password?</span>
        </div>
        <Button>Login Now</Button>
        <span className="register-link">
          Don't have an account
          <Link to="/register" className="link">
            Sign up!
          </Link>
        </span>
      </Card>
    </Styled>
  );
};

export default LoginForm;
