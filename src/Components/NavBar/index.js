import React, { useState,useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Util/images/logo.png";
// import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import validationSchema from '../../Util/validation/login'
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import AuthContext from '../../Context/AuthContext';
// import Signuppop from '../Signuppop';

import "./style.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  // const navigate = useNavigate();
  // function navToLogin(){
  //  navigate('/Loginpop');
  // }


const [open1, setOpenlogin] = React.useState(false);
const [open2, setOpensign] = React.useState(false);


const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');
const [mobile, setMobile] = useState('');
const [usernameError, setUsernameError] = useState(false);
const [passwordError, setPasswordError] = useState(false);
const [EmailError, setEmailError] = useState(false);
// const [login,setLogin]=useState("false");

const theme = useTheme();
const fullScreen = useMediaQuery(theme.breakpoints.down('md'));



const handleClickOpenlogin = () => {
  setOpenlogin(true);
  };
  const handleClickOpensign = () => {
    setOpensign(true);
    };
    
  
  
  
  const handleClose = () => {
  setOpenlogin(false);
  };
  const handleCloseSign = () => {
    setOpensign(false);
    };


const handleLogin = () => {
  // setLogin(true);
    // تحقق هنا من الاسم وكلمة المرور
    if (username === '') {
      setUsernameError(true);
    }
    if (password === '') {
      setPasswordError(true);
    }
    // إذا كانت كلمة المرور واسم المستخدم صحيحة، قم باتخاذ الإجراء المناسب
  };

  /////////////////////////////////////
  // function SignupPage() {

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [usernameError, setUsernameError] = useState(false);
    // const [passwordError, setPasswordError] = useState(false);


    

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  
  // const handleClose = () => {
  //   setOpen(false);
  // };

  const handleSignup = () => {
    if (username === '') {
      setUsernameError(true);
    }
    if (password === '') {
      setPasswordError(true);
    }
    if(email===''){
      setEmailError(true);
    }
  };
  ///////////////////////////

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
            <button className="green-button" onClick={handleClickOpensign}>
              SignUp
            </button>
            <Dialog
        fullScreen={fullScreen}
        open={open2}
        onClose={handleCloseSign}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Create Account
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={usernameError}
                helperText={usernameError ? 'Please Enter Name': ''}
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
                helperText={passwordError ? 'Please Enter Password':''}
              />
                <TextField
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                margin="normal"
                // value={email}
                onChange={(e) => setPassword(e.target.value)}
                error={EmailError}
                helperText={EmailError ? 'Please Enter email':''}
              />
                              <TextField
                label="Mobile"
                variant="outlined"
                // type="text"
                fullWidth
                margin="normal"
                // value={mobile}
                onChange={(e) => setPassword(e.target.value)}
                // error={emailError}
                helperText={passwordError ? 'Please Enter email':''}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSignup}
                style={{ backgroundColor: '#24AB70', marginTop: '10px' }}
              >
                Create Account
              </Button>
              <Typography variant="body2" style={{ marginTop: '10px' }}>
                Already have an account?{' '}
                <span
                  style={{ color: '#24AB70', cursor: 'pointer' }}
                  onClick={handleClickOpenlogin}
                >
                  Log in 
                </span>
              </Typography>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
  
            <button className="green-button" onClick={handleClickOpenlogin}>  
              Login   
            </button>
        <Dialog
        fullScreen={fullScreen}
        open={open1}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
        
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <div style={{ textAlign: 'center', padding: '20px' }}>
       <Typography variant="h4" component="h1" style={{ color: '#24AB70' }}>
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
        helperText={usernameError ? 'Please Enter Name': ''}
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
        helperText={passwordError ? 'Please Enter Passward':''}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        style={{ backgroundColor: '#24AB70', marginTop: '10px' }}
      >
        Login
      </Button>
      <Typography variant="body2" style={{ marginTop: '10px' }}>
        don't have Account{' '}
        <span
          style={{ color: '#24AB70', cursor: 'pointer' }}
          onClick={handleClickOpensign}
        >
          Create Account
        </span>
      </Typography>
    </div>
          </DialogContentText>
        </DialogContent>
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
