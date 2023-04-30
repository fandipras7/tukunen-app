import { useEffect, useState } from "react";
import AuthLayout from "../../components/organism/AuthLayout/Index";
import Input from "../../components/atoms/Input/Index";
import Button from "../../components/atoms/Button/Index";
import { useLocation } from "react-router-dom";
import { InputProp } from "../../types/Input";
import { user } from "../../helpers/Const";

const Register = () => {
  const [userRole, setUserRole] = useState("customer");
  const [inputsRegis, setInputRegis] = useState<InputProp[]>([]);
  const location = useLocation().pathname.split("/")[1];
  const changeUserRole = (role: string) => {
    setUserRole(role);
  };

  useEffect(() => {
    let inputList: Array<InputProp> = [
        { className: "auth-input", id: "name", name: "name", placeholder: "Name" },
        { className: "auth-input", id: "email", name: "email", placeholder: "Email", },
        { className: "auth-input", id: "phone", name: "phone", placeholder: "Phone Number", category: "seller", },
        { className: "auth-input", id: "store", name: "store", placeholder: "Store Name", category: "seller", },
        { className: "auth-input", id: "password", name: "password", placeholder: "Password", },
      ];
    setInputRegis(inputList)
    if (userRole === user.CUSTOMER) {
      setInputRegis(
        (current) =>
          (current = current.filter(
            (item: InputProp) => item.category !== user.SELLER
          ))
      );
    }
  }, [userRole]);
  return (
    <AuthLayout attentionTitle="Please sign up with your account" pathName={location} role={userRole} setRole={changeUserRole}>
      <div className="d-flex flex-column mb-26px gap-15">
        {inputsRegis?.map((input: InputProp, index: number) => (
          <Input
            key={index}
            className={input.className}
            id={input.id}
            name={input.name}
            placeholder={input.placeholder}
          />
        ))}
      </div>
      <Button className="login" title="Register" />
    </AuthLayout>
  );
};

export default Register;
