import React, { useEffect, useState } from "react";
import Button from "../../components/atoms/Button/Index";
import Input from "../../components/atoms/Input/Index";
import AuthLayout from "../../components/organism/AuthLayout/Index";
import { useLocation } from "react-router-dom";
import { InputProp } from "../../types/Input";

const ResetPassword = () => {
  const [resetStatus, setResetStatus] = useState("");
  const location = useLocation().pathname.split("/")[1];
  const [inputsReset, setInputReset] = useState<InputProp[]>([]);

  useEffect(() => {
    let inputList: Array<InputProp> = [
      {
        className: "auth-input",
        id: "email",
        name: "email",
        placeholder: "Email",
      },
    ];
    switch (resetStatus) {
      case "reseted":
        setInputReset(
          (current) =>
            (current = [
              ...current,
              {
                className: "auth-input",
                id: "password",
                name: "password",
                placeholder: "Password",
              },
            ])
        );
        break;
      case "changed":
        setInputReset(
          (current) =>
            (current = [
              {
                className: "auth-input",
                id: "password",
                name: "password",
                placeholder: "Password",
              },
              {
                className: "auth-input",
                id: "confirm",
                name: "confirm",
                placeholder: "Confirmation New Passoword",
              },
            ])
        );
        break;
      default:
        setInputReset(inputList);
        break;
    }
  }, [resetStatus]);
  return (
    <AuthLayout pathName={location} attentionTitle="Reset Password">
      <div className="d-flex flex-column gap-16px mb-26px">
        {inputsReset.map((item) => (
          <Input
            className="auth-input"
            value=""
            id={item.id}
            name={item.name}
            placeholder={item.placeholder}
          />
        ))}
      </div>
      <Button className="login" title="Reset" />
    </AuthLayout>
  );
};

export default ResetPassword;
