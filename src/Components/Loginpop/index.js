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
import Signuppop from '../Signuppop';

function Loginpop(){


    return(
      <>
      <h1>Aya</h1>
      </>
    )
//   const [open, setOpen] = React.useState(false);
// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');
// const [usernameError, setUsernameError] = useState(false);
// const [passwordError, setPasswordError] = useState(false);
// const [login,setLogin]=useState("false");

// const theme = useTheme();
// const fullScreen = useMediaQuery(theme.breakpoints.down('md'));



// const handleClickOpen = () => {
//   setOpen(true);
//   };
  
  
  
//   const handleClose = () => {
//   setOpen(false);
//   };


// const handleLogin = () => {
//   setLogin(true);
//     // تحقق هنا من الاسم وكلمة المرور
//     if (username === '') {
//       setUsernameError(true);
//     }
//     if (password === '') {
//       setPasswordError(true);
//     }
//     // إذا كانت كلمة المرور واسم المستخدم صحيحة، قم باتخاذ الإجراء المناسب
//   };

//   return(
//     <>
//         <Dialog
//         fullScreen={fullScreen}
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="responsive-dialog-title"
//       >
//         <DialogTitle id="responsive-dialog-title">
        
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//           <div style={{ textAlign: 'center', padding: '20px' }}>
//        <Typography variant="h4" component="h1" style={{ color: '#24AB70' }}>
//          Login
//        </Typography>
//        <TextField
//         label="Name"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         error={usernameError}
//         helperText={usernameError ? 'Please Enter Name': ''}
//       />
//       <TextField
//         label="Password"
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
//         Login
//       </Button>
//       <Typography variant="body2" style={{ marginTop: '10px' }}>
//         don't have Account{' '}
//         <span
//           style={{ color: '#24AB70', cursor: 'pointer' }}
//           onClick={Signuppop}
//         >
//           Create Account
//         </span>
//       </Typography>
//     </div>
//           </DialogContentText>
//         </DialogContent>
//         {/* <DialogActions>
//           <Button autoFocus onClick={handleClose}>
//             Disagree
//           </Button>
//           <Button onClick={handleClose} autoFocus>
//             Agree
//           </Button>
//         </DialogActions> */}
//       </Dialog>


}
export default Loginpop;