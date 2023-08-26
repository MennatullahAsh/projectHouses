import React from "react";
import logo from '../Utilis/images/logo.png';
import { Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import './style.css'

const pages = ['Home', 'About Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Footer() {
    return (
        <footer className="footer">
            
            <Typography variant="body2"  align="center" className="copyright">
                &copy; {new Date().getFullYear()} Mennatullah 2023 house
            </Typography>
        </footer>
    )
}

export default Footer;
