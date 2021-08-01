import React, { useState } from "react";
import "./App.css";
import LoginDiv from "./LoginDiv";
import RegistrationDiv from "./RegistrationDiv";
import { useTransition, animated } from "react-spring";
// enter: { x: 0, y: 0, opacity: 1 , width: 100},
function App() {
  const [loginShow, setLoginShow] = useState(false);
  const [registrationShow, setRegistrationShow] = useState(false);
  const transitionForLogin = useTransition(loginShow, {
    from: { x: -800, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: -800, y: 800, opacity: 0 },
  });
  const transitionForResgistration = useTransition(registrationShow, {
    from: { x: 800, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 800, y: 800, opacity: 0 },
  });

  const handleLoginButton = () => {
    setRegistrationShow(false);
    setTimeout(() => {
      setLoginShow(true);
    }, 600);
  };
  const handleRegistrationButton = () => {
    setLoginShow(false);
    setTimeout(() => {
      setRegistrationShow(true);
    }, 600);
  };

  return (
    <>
      <div className="container">
        <div className="AuthenticationField">
          <button className="loginButton" onClick={handleLoginButton}>
            Login
          </button>
          <button
            className="RegistrationButton"
            onClick={handleRegistrationButton}
          >
            Registration
          </button>
        </div>
        <div className="LoginContainer">
          {transitionForLogin((style, item) =>
            item ? (
              <animated.div style={style}>
                <LoginDiv />
              </animated.div>
            ) : (
              ""
            )
          )}
          {transitionForResgistration((style, item) =>
            item ? (
              <animated.div style={style}>
                <RegistrationDiv />
              </animated.div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </>
  );
}

export default App;
