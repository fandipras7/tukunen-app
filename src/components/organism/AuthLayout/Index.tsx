import "./style.scss";
import React from "react";
import tukuLogo from "../../../assets/images/tukunen_logo.svg";
import Button from "../../atoms/Button/Index";
import { Link } from "react-router-dom";
import { authCategory } from "../../../helpers/Const";

interface authProps {
  role?: string;
  pathName?: string;
  setRole?: (role: string) => void;
  attentionTitle?: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<authProps> = (props) => {
  const IsButtonActive = (role: string) => {
    const selectBorderClass =
      role === "seller" ? "border-opt_2" : "border-opt_1";
    const isActived = role === props.role ? "active" : "not-active";
    return selectBorderClass + " " + isActived;
  };

//   const attentionTitle = (): string => {
//     switch (props.pathName) {
//       case "login":
//         return "Please login with your account";
//       case "register":
//         return "Please sign up with your account";
//       default:
//         return "Reset password";
//     }
//   };

  const isHasAccount = () => {
    let theComponent = (
      <p className="text-14-14-bk">
        Don't have a Tokopedia account?{" "}
        <Link to="/register">
          <span className="text-14-14">Register</span>
        </Link>
      </p>
    );
    if (props.pathName === authCategory.REGISTER) {
      theComponent = (
        <p className="text-14-14-bk">
          Already have a Tokopedia account?{" "}
          <Link to="/login">
            <span className="text-14-14">Login</span>
          </Link>
        </p>
      );
    }
    return theComponent;
  };

  return (
    <div id="auth" className="d-flex flex-column align-center justify-center vh">
      <div className="d-flex align-center mb-40px">
        <img src={tukuLogo} alt="tukuLogo" />
        <span className="text-28-20 mt-10px ml-7px">Tukunen</span>
      </div>
      <p className="mb-40px">{props.attentionTitle}</p>
      <div className={props.pathName === 'reset' ? 'd-none' : 'd-flex mb-40px'}>
        <Button onClick={() => {props.setRole && props.setRole("customer"); }} className={IsButtonActive("customer")} title="Customer" />
        <Button onClick={() => {props.setRole && props.setRole("seller"); }} className={IsButtonActive("seller")} title="Seller" />
      </div>
      <form action="" className="d-flex flex-column mb-40px">
        {props.children}
      </form>
      {isHasAccount()}
    </div>
  );
};

export default AuthLayout;
