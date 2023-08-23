import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';

import logo from '../Utilis/images/logo.png';
import style from './style.css';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" style={{
            backgroundColor: "white"
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img className='logo'
                        src={logo}
                        alt=""
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            mr: 2,
                        }}
                    />

                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', fontSize: '360' }}>

                        <Button > <Link to='/' style={{
                            color: 'black',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            marginLeft: '20px',
                            textDecoration: 'none',
                        }}> Home</Link></Button>
                        <Button> <Link to='/About' style={{
                            color: 'black',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            marginLeft: '20px',
                            textDecoration: 'none',
                        }} >About Us</Link></Button>
                        

                    </Box>


                    <Box sx={{ display: 'flex', alignItems: 'center' }} >
                        <Button className='btn1'
                            style={{
                                color: 'black',
                                backgroundColor: '#EE8400',
                                marginRight: '20px',
                                width: '90px',
                                fontWeight: 'bold',
                            }}
                        >
                            Sign In
                        </Button>
                        <Button
                            variant="contained"
                            style={{
                                border: '1px solid #EE8400 ',
                                backgroundColor: '#fff',
                                width: '90px',
                                fontWeight: 'bold',
                                color: 'black',
                                marginRight: '40px'
                            }}
                        >
                            Sign Up
                        </Button>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;