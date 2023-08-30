import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
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
                        <Button className='btn' > <Link to='/' style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            marginLeft: '20px',
                            textDecoration: 'none',
                        }}> Home</Link></Button>

                        <Button> <Link to='/About' style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            marginLeft: '20px',
                            textDecoration: 'none',
                        }} >About Us</Link></Button>
                    </Box>


                    <Box sx={{ display: 'flex', alignItems: 'center' }} >
                        <Button className='btn1'>
                            <Link to='/SignIn' style={{
                                color: 'black',
                                backgroundColor: '#EE8400',
                                marginRight: '20px',
                                width: '90px',
                                fontWeight: 'bold',
                                borderRadius:'3px',
                                textDecoration:'none',
                                color:'#fff',
                                padding:'4px 5px'
                            }} >  Login</Link></Button>

                        <Button className='btn1'>
                            <Link to='/SignUp' style={{
                                color: 'black',
                                backgroundColor: '#001D58',
                                marginRight: '20px',
                                width: '90px',
                                fontWeight: 'bold',
                                borderRadius:'3px',
                                textDecoration:'none',
                                color:'#fff',
                                padding:'4px 5px'
                            }} >  Sign Up</Link></Button>
                    
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;