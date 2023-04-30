import { useState } from "react";
import AuthLayout from "../../components/organism/AuthLayout/Index";
import Button from "../../components/atoms/Button/Index";
import Input from "../../components/atoms/Input/Index";
import { useLocation, Link } from "react-router-dom";

const Login = () => {
  const [userRole, setUserRole] = useState("customer");
  const location = useLocation().pathname.split("/")[1];

  const changeUserRole = (role: string) => {
    setUserRole(role);
  };

  return (
    <AuthLayout attentionTitle="Please login with your account" pathName={location} role={userRole} setRole={changeUserRole}>
      <Input className="auth-input mb-15px" id="email" name="email" placeholder="Email" />
      <Input className="auth-input mb-26px" id="password" name="password" placeholder="password" />
      <Link className="mb-26px text-end text-14-14" to="/reset"> Forgot Password ? </Link>
      <Button className="login" title="Login" />
    </AuthLayout>
  );
};

export default Login;
