import React from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import "./App.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import EmailIcon from "@material-ui/icons/Email";
const RegistrationDiv = () => {
  const RegistrationPagePos = useSpring({ x: 0, y: 0 });
  // const bindLogoPos = useDrag((params) => {

  // });

  const bindHandlePos = useDrag((params) => {
    RegistrationPagePos.x.set(params.offset[0]);
    RegistrationPagePos.y.set(params.offset[1]);
    if (!params.dragging) {
      RegistrationPagePos.x.start(0);
      RegistrationPagePos.y.start(0);
      params.offset[0] = 0;
      params.offset[1] = 0;
    }
  });
  return (
    <animated.div
      {...bindHandlePos()}
      style={{
        x: RegistrationPagePos.x,
        y: RegistrationPagePos.y,
      }}
    >
      <div className="Login-div" style={{ height: "680px" }}>
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
          <div className="username">
            <EmailIcon
              style={{
                marginTop: "21px",
                marginLeft: "20px",
                marginRight: "10px",
                opacity: "0.3",
                color: "24cfaa",
              }}
            />
            <input type="username" classname="user-input" placeholder="Email" />
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
              placeholder="Set Password"
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
              placeholder="Match Password"
            />
          </div>
          <button className="signin-button">sign Up</button>
        </div>
      </div>
    </animated.div>
  );
};

export default RegistrationDiv;
