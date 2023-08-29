import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

import img from "../../Components/Utilis/images/About.png";

const defaultTheme = createTheme();

export default function SignInSide() {
    const [emailError, setEmailError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState();
    const [users, setUsers] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://my-json-server.typicode.com/MennatullahAsh/UsersAPI/users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        const confirmPassword = data.get('confirmPassword');

        console.log('Fetched users:', users);

        if (!isValidEmail(email)) {
            setEmailError('Invalid email address');
            return;
        }

        if (!isValidConfirmPassword(password, confirmPassword)) {
            setConfirmPasswordError("Passwords don't match");
            return;
        }
        const convertedPassword = isValidNumber(password) ? parseInt(password) : password;
       
        setEmailError('');
        setConfirmPasswordError('');
        // const passwordAsNumber = parseInt(password);

        
        console.log({
            email: email,
            confirmPassword: confirmPassword,
            // passwordAsNumber: passwordAsNumber,

        });
    };

    const isValidNumber = (value) => {
        return !isNaN(parseFloat(value)) && isFinite(value);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };

    const isValidConfirmPassword = (password, confirmPassword) => {
        return password === confirmPassword;
    };

    return (
        <div className='full-page' style={{ width: '90%', margin: '40px auto' }}>
            <ThemeProvider theme={defaultTheme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid item xs={false} sm={4} md={7}
                        sx={{
                            backgroundImage: `url(${img})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }} />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 'auto',
                                width: '80%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                            <Avatar sx={{ m: 1, bgcolor: '#EE8400' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign In
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <TextField margin="normal" required fullWidth id="email"   label="Email " name="email" autoComplete="email"
                                    autoFocus error={!!emailError} helperText={emailError} />


                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    autoComplete="current-password"
                                    error={!!confirmPasswordError}
                                    helperText={confirmPasswordError}
                                    InputProps={{
                                        endAdornment: (
                                            <IconButton onClick={handleTogglePasswordVisibility}>
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        ), }}/>

                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me" />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}>
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <RouterLink to='' style={{
                                            color: '#1565C0'
                                        }}>Forgot password?</RouterLink>
                                    </Grid>
                                    <Grid item>
                                        <RouterLink to='/SignUp' style={{
                                            color: '#1565C0'
                                        }}>Don't have an account? Sign Up</RouterLink>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    );
}
