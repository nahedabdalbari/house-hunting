import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Util/images/logo.png";
import { useNavigate } from "react-router-dom";
import ResponsiveDialog from "../../Pages/Login";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
// import DialogActions from '@mui/material/DialogActions';
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import "./style.css";
import { Phone } from "@mui/icons-material";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  // const navigate = useNavigate();
  // function navToLogin(){
  // // navigate('/Login')

  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setemailError] = useState(false);
  const [login, setLogin] = useState("false");
  const [signup, setSignup] = useState("false");

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleLogin = () => {
    setLogin(true);
    // تحقق هنا من الاسم وكلمة المرور
    if (username === "") {
      setUsernameError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }
    // إذا كانت كلمة المرور واسم المستخدم صحيحة، قم باتخاذ الإجراء المناسب
  };
  const handleCreateAccount = () => {
    setSignup(true);
    if (username === "") {
      setUsernameError(true);
    }
    if (email === "") {
      setUsernameError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }
    if (mobile === "") {
      setPasswordError(true);
    }

    // history.push('/create-account'); // قم بتعديل الرابط وفقًا لمسار صفحة إنشاء الحساب الخاصة بك
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img className="logo-img" src={logo} alt="" />{" "}
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/aboutus"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
          </ul>
          <div className="nav-buttons">
            <button className="green-button" onClick={handleClickOpen}>
              SignUp
            </button>
            <Dialog
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title"></DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <div style={{ textAlign: "center", padding: "20px" }}>
                    <Typography
                      variant="h4"
                      component="h1"
                      style={{ color: "#24AB70" }}
                    >
                      Sign UP
                    </Typography>
                    <TextField
                      label="Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      error={usernameError}
                      helperText={usernameError ? "Please Enter Name" : ""}
                    />
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={email}
                      onChange={(e) => setUsername(e.target.value)}
                      error={emailError}
                      helperText={emailError ? "Please Enter Name" : ""}
                    />
                    <TextField
                      label="Password"
                      variant="outlined"
                      type="password"
                      fullWidth
                      margin="normal"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      error={passwordError}
                      helperText={passwordError ? "Please Enter Passward" : ""}
                    />
                    <TextField
                      label="Mobile"
                      variant="outlined"
                      type="number"
                      fullWidth
                      margin="normal"
                      value={Phone}
                      onChange={(e) => setMobile(e.target.value)}
                      error={passwordError}
                      // helperText={passwordError ? 'Please Enter Mobile':''}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleCreateAccount}
                      style={{ backgroundColor: "#24AB70", marginTop: "10px" }}
                    >
                      Login
                    </Button>
                    <Typography variant="body2" style={{ marginTop: "10px" }}>
                      I have Account{" "}
                      <span
                        style={{ color: "#24AB70", cursor: "pointer" }}
                        onClick={handleLogin}
                      >
                        Login Account
                      </span>
                    </Typography>
                  </div>
                </DialogContentText>
              </DialogContent>
              {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
            </Dialog>
            <button className="green-button" onClick={handleClickOpen}>
              Login
            </button>
            <Dialog
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title"></DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <div style={{ textAlign: "center", padding: "20px" }}>
                    <Typography
                      variant="h4"
                      component="h1"
                      style={{ color: "#24AB70" }}
                    >
                      Login
                    </Typography>
                    <TextField
                      label="Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      error={usernameError}
                      helperText={usernameError ? "Please Enter Name" : ""}
                    />
                    <TextField
                      label="Password"
                      variant="outlined"
                      type="password"
                      fullWidth
                      margin="normal"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      error={passwordError}
                      helperText={passwordError ? "Please Enter Passward" : ""}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleLogin}
                      style={{ backgroundColor: "#24AB70", marginTop: "10px" }}
                    >
                      Login
                    </Button>
                    <Typography variant="body2" style={{ marginTop: "10px" }}>
                      don't have Account{" "}
                      <span
                        style={{ color: "#24AB70", cursor: "pointer" }}
                        onClick={handleCreateAccount}
                      >
                        Create Account
                      </span>
                    </Typography>
                  </div>
                </DialogContentText>
              </DialogContent>
              {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
            </Dialog>
          </div>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
