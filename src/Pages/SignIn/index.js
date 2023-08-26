import React, { useState } from 'react'; // استيراد useState
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import img from "../../Components/Utilis/images/About.png"

const defaultTheme = createTheme();

export default function SignInSide() {
    const [emailError, setEmailError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState(''); // حالة تحقق لتأكيد كلمة المرور


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        const confirmPassword = data.get('confirmPassword');

        // تنفيذ التحقق هنا
        if (!isValidEmail(email)) {
            setEmailError('Invalid email address');
            return;
        }

        if (!isValidConfirmPassword(password, confirmPassword)) {
            setConfirmPasswordError("Passwords don't match");
            return;
        }
        // إذا تم التحقق بنجاح
        setEmailError('');
        setConfirmPasswordError('');


        // تنفيذ باقي الخطوات
        console.log({
            email: email,
            confirmPassword: confirmPassword,
        });
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };

    const isValidConfirmPassword = (password, confirmPassword) => {
        return password === confirmPassword; // التحقق من تطابق كلمتي المرور
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
                        }}
                    />
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
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    error={!!emailError}
                                    helperText={emailError}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    error={!!confirmPasswordError}
                                    helperText={confirmPasswordError}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <RouterLink to='' style={{
                                            color: '#1565C0'
                                        }}>Forgot password?</RouterLink>
                                    </Grid>
                                    <Grid item>
                                        {/* <Link to='/SignUp'>Don't have an account? Sign Up</Link> */}
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
