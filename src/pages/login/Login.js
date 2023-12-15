import "./Login.css";
import { IoRocketOutline } from "react-icons/io5";
import React from "react";
import Input from "../../input/Input";
import Button from "../../components/button/Button";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="login-card">
        <div className="login-logo logo-parent">
          <IoRocketOutline className="logo" style={{ fontSize: "45px" }} />
          <h4
            className="logo-name h1-color"
            style={{ fontSize: "23px", fontStyle: "italic" }}
          >
            Start Hub
          </h4>
        </div>
        <div className="login-form">
          <Input type="mail" placeholder="E-mail" className="login-input" />
          <Input
            type="password"
            placeholder="Password"
            className="login-input"
          />
          <Button name="Log in" className="login-btn" />
          <p className="text-center m-0 h1-color">
            Don't have an account?{" "}
            <span>
              <NavLink to={"/register"} style={{ color: "var(--main-color)" }}>
                Signup
              </NavLink>
            </span>
          </p>
        </div>
        <p className="text-center">
          <NavLink to={"/"} style={{ color: "var(--main-color)" }}>
            Forget password
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
