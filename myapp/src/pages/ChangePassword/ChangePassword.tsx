import React from "react";
import { ChangePasswordForm } from "../../components/forms";

const ChangePassword = () => {
  const handleChangePassword = () => {
    console.log("password changed");
  };
  return (
    <div style={{ marginTop: "10vh" }}>
      <ChangePasswordForm onChangePassword={handleChangePassword} />
    </div>
  );
};

export default ChangePassword;
