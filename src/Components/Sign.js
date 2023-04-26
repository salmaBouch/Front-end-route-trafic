import * as Components from "../Styles/SignStyles.js";
import "../Styles/styles.css";
import React from "react";

function Sign() {
  const [signIn, toggle] = React.useState(true);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});
  const [user, setUser] = React.useState({});

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function handleSubmit(event) {
    event.preventDefault();

    let data = {
      name: name,
      email: email,
      password: password,
    };
    setUser(data);
    let UserId = JSON.parse(localStorage.getItem("UserId") || "1");
    data.id = UserId;
    let user = JSON.parse(localStorage.getItem("user") || "[]");
    user.push(data);
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("UserId", JSON.stringify(UserId + 1));
    // Vérifier si les données ont été stockées correctement
    console.log("Data stored in localStorage:", data);
  }

  // Fonction pour mettre à jour le champ de formulaire Name
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Fonction pour mettre à jour le champ de formulaire Email
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Fonction pour mettre à jour le champ de formulaire Password
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const handleClick = () => {
    let errors = {};
    if (!name) {
      errors.name = "Name field is required";
    }
    if (!validateEmail(email)) {
      errors.email = "Invalid email address";
    }
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    }
  };

  return (
    <div>
      <div className="container">
        <Components.Container>
          <div className="row">
            <div className="col">
 {/* ********************************************************************************************************** */}
              <Components.SignUpContainer signingIn={signIn}>
                <Components.Form onSubmit={handleSubmit}>
                  <Components.Title>Create Account</Components.Title>

                  <Components.Input
                    type="text"
                    placeholder="Name"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    className="form-control"
                  />

                  <span className="error" style={{ color: "red" }}>
                    {errors.name}
                  </span>

                  <Components.Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="form-control"
                  />
                  {errors.email && (
                    <span className="error" style={{ color: "red" }}>
                      {errors.email}{" "}
                    </span>
                  )}

                  <Components.Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="form-control"
                  />
                  {errors.password && (
                    <span className="error" style={{ color: "red" }}>
                      {errors.password}
                    </span>
                  )}

                  <Components.Input
                    type="password"
                    placeholder=" Confirm Password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="form-control"
                  />

                  <Components.Button
                    onClick={handleClick}
                    type="submit"
                    name="signup"
                    
                  >
                    Sign Up
                  </Components.Button>
                </Components.Form>
              </Components.SignUpContainer>
            </div>
{/* ******************************************************************************************************** */}
            <div className="col">
              <Components.SignInContainer signingIn={signIn}>
                <Components.Form onSubmit={handleSubmit}>
                  <Components.Title>Sign in</Components.Title>

                  <Components.Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onInput={handleEmailChange}
                  />
                 

                  <Components.Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="form-control"
                  />
                 

                  <Components.Anchor href="#">
                    Forgot your password?
                  </Components.Anchor>

                  <Components.Button type="submit" name="signin"  >
                    Sign In
                  </Components.Button>
                </Components.Form>
              </Components.SignInContainer>
            </div>
          </div>
{/* ************************************************************************************************************* */}
          <Components.OverlayContainer signingIn={signIn}>
            <Components.Overlay signingIn={signIn}>
              <div className="row">
                <div className="col">
                  <Components.LeftOverlayPanel signingIn={signIn}>
                    <Components.Title>Welcome Back!</Components.Title>
                    <Components.Paragraph>
                      To keep connected with us please login with your personal
                      info
                    </Components.Paragraph>
                    <Components.GhostButton onClick={() => toggle(true)}>
                      Sign In
                    </Components.GhostButton>
                  </Components.LeftOverlayPanel>
                </div>
                <div className="col">
                  <Components.RightOverlayPanel signingIn={signIn}>
                    <Components.Title>Hello, Friend!</Components.Title>
                    <Components.Paragraph>
                      Enter your personal details and start journey with us
                    </Components.Paragraph>
                    <Components.GhostButton onClick={() => toggle(false)}>
                      Sign Up
                    </Components.GhostButton>
                  </Components.RightOverlayPanel>
                </div>
              </div>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>
      </div>
    </div>
  );
}

export default Sign;
