import "./Register.css";
import {IoRocketOutline} from "react-icons/io5";
import Input from "../../input/Input";
import React from "react";
import Button from "../../components/button/Button";
import {NavLink} from "react-router-dom";

const Register = () => {
    return (
        <div className="register">
            <div className="register-card">
                <div className="sign-logo logo-parent">
                    <IoRocketOutline className="logo" style={{fontSize: "45px"}}/>
                    <h4
                        className="logo-name h1-color"
                        style={{fontSize: "23px", fontStyle: "italic"}}
                    >
                        Start Hub
                    </h4>
                </div>

                <div className="sign-card">
                    <div className="sign-steps">
                        <div className="sign-step">
                            <span className="sign-step-num current-step">1</span>
                            <p className="sign-step-title">E-mail & password</p>
                        </div>
                        <div className="sign-step">
                            <span className="sign-step-num">2</span>
                            <p className="sign-step-title">E-mail & password</p>
                        </div>
                        <div className="sign-step">
                            <span className="sign-step-num">3</span>
                            <p className="sign-step-title">Brand or company information</p>
                        </div>
                        <div className="sign-step">
                            <span className="sign-step-num">4</span>
                            <p className="sign-step-title">E-mail & password</p>
                        </div>
                        <div className="sign-step">
                            <span className="sign-step-num">5</span>
                            <p className="sign-step-title">E-mail & password</p>
                        </div>
                    </div>
                    <div className="sign-form">
                        <Input type="text" placeholder="User name" className="sign-input"/>
                        <Input type="mail" placeholder="E-mail" className="sign-input"/>
                        <Input
                            type="password"
                            placeholder="Password"
                            className="sign-input"
                        />

                        <Button name="Next" className="sign-btn" />
                        <p className="text-center m-0">Don't have an account? <span><NavLink to={"/login"} style={{color:"var(--main-color)"}}>Login</NavLink></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
