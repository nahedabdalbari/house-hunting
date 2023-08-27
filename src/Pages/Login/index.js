// import React, { useState } from 'react';
// // import { useHistory } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';


// const Login = () => {
//   // const history = useHistory();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [usernameError, setUsernameError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);

//   const handleCreateAccount = () => {
//     // history.push('/create-account'); // قم بتعديل الرابط وفقًا لمسار صفحة إنشاء الحساب الخاصة بك
//   };


//   const handleLogin = () => {
//     // تحقق هنا من الاسم وكلمة المرور
//     if (username === '') {
//       setUsernameError(true);
//     }
//     if (password === '') {
//       setPasswordError(true);
//     }
//     // إذا كانت كلمة المرور واسم المستخدم صحيحة، قم باتخاذ الإجراء المناسب
//   };

//   return (

  
//     <div style={{ textAlign: 'center', padding: '20px' }}>
//       <Typography variant="h4" component="h1" style={{ color: '#24AB70' }}>
//         تسجيل الدخول
//       </Typography>
//       <TextField
//         label="الاسم"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         error={usernameError}
//         helperText={usernameError ? 'Please Enter Name': ''}
//       />
//       <TextField
//         label="كلمة المرور"
//         variant="outlined"
//         type="password"
//         fullWidth
//         margin="normal"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         error={passwordError}
//         helperText={passwordError ? 'Please Enter Passward':''}
//       />
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleLogin}
//         style={{ backgroundColor: '#24AB70', marginTop: '10px' }}
//       >
//         تسجيل الدخول
//       </Button>
//       <Typography variant="body2" style={{ marginTop: '10px' }}>
//         ليس لديك حساب؟{' '}
//         <span
//           style={{ color: '#24AB70', cursor: 'pointer' }}
//           onClick={handleCreateAccount}
//         >
//           إنشاء حساب
//         </span>
//       </Typography>
//     </div>
//   );
// };

// export default Login;

import  React,{useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleLogin = () => {
        // تحقق هنا من الاسم وكلمة المرور
        if (username === '') {
          setUsernameError(true);
        }
        if (password === '') {
          setPasswordError(true);
        }
        // إذا كانت كلمة المرور واسم المستخدم صحيحة، قم باتخاذ الإجراء المناسب
      };
        const handleCreateAccount = () => {
    // history.push('/create-account'); // قم بتعديل الرابط وفقًا لمسار صفحة إنشاء الحساب الخاصة بك
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
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
          onClick={handleCreateAccount}
        >
          Create Account
        </span>
      </Typography>
    </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

