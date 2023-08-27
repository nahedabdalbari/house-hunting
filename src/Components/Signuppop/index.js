import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
 
function Signup(){

  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setemailError] = useState(false);
  const [signup,setSignup]=useState("false");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  const handleClickOpen = () => {
  setOpen(true);
  };
  
  const handleCreateAccount = () => {
    setSignup(true);
    if (username === '') {
      setUsernameError(true);
    }
    if (email === '') {
      setUsernameError(true);
    }
    if (password === '') {
      setPasswordError(true);
    }
    if (mobile === '') {
      setPasswordError(true);
    }

// history.push('/create-account'); // قم بتعديل الرابط وفقًا لمسار صفحة إنشاء الحساب الخاصة بك
};
  
  const handleClose = () => {
  setOpen(false);
  };
  return(
    <>
                <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
        
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <div style={{ textAlign: 'center', padding: '20px' }}>
       <Typography variant="h4" component="h1" style={{ color: '#24AB70' }}>
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
        helperText={usernameError ? 'Please Enter Name': ''}
      />
             <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setUsername(e.target.value)}
        error={emailError}
        helperText={emailError ? 'Please Enter Name': ''}
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
        <TextField
        label="Mobile"
        variant="outlined"
        type="number"
        fullWidth
        margin="normal"
        value={Number}
        onChange={(e) => setMobile(e.target.value)}
        error={passwordError}
        // helperText={passwordError ? 'Please Enter Mobile':''}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleCreateAccount}
        style={{ backgroundColor: '#24AB70', marginTop: '10px' }}
      >
        Login
      </Button>
      <Typography variant="body2" style={{ marginTop: '10px' }}>
        I have Account{' '}
        <span
          style={{ color: '#24AB70', cursor: 'pointer' }}
          onClick={}
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
    </>
  );
}
export default Signup