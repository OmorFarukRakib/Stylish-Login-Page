import "./App.css";

const AuthenticationField = ({
  handleLoginButton,
  handleRegistrationButton,
}) => {
  return (
    <>
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
    </>
  );
};

export default AuthenticationField;
