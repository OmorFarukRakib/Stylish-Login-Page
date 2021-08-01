import React, { useEffect } from "react";
import "./App.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
const LoginDiv = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("okee");
    }, 6000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="Login-div">
      <div className="logo">
        <RestaurantIcon style={{ fontSize: 100, color: "#24cfaa" }} />
      </div>
      <div className="title">
        <center>ReviewBhai</center>
      </div>
      <div className="sub-title">
        <center>We value your opinion</center>
      </div>
      <div className="fields">
        <div className="username">
          <AccountCircleIcon
            style={{
              marginTop: "21px",
              marginLeft: "20px",
              marginRight: "10px",
              opacity: "0.3",
              color: "24cfaa",
            }}
          />
          <input
            type="username"
            classname="user-input"
            placeholder="username"
          />
        </div>

        <div className="password">
          <VpnKeyIcon
            style={{
              marginTop: "21px",
              marginLeft: "20px",
              marginRight: "10px",
              opacity: "0.3",
              color: "24cfaa",
            }}
          />
          <input
            type="password"
            classname="password-input"
            placeholder="password"
          />
        </div>
        <button className="signin-button">sign in</button>
      </div>
      <div className="forget-pass">
        <center>Forgot Password?</center>
      </div>
    </div>
  );
};

export default LoginDiv;
