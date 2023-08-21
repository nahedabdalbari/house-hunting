import React from "react";
import { Typography } from '@mui/material';

import './style.css'
function Footer() {
    return (
        <footer className="footer">
        
            <Typography variant="body2"  align="center" className="copyright">
                &copy; {new Date().getFullYear()} nahedalbari house
            </Typography>
        </footer>
    )
}
export default Footer;