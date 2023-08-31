import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const defaultTheme = createTheme();

const isValidFirstName = (firstName) => {
    return firstName.trim() !== ''; 
};

export default function SignUp() {
    const [firstNameError, setFirstNameError] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [confirmPasswordError, setConfirmPasswordError] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const firstName = data.get('firstName');
        const email = data.get('email');
        const password = data.get('password');
        const confirmPassword = data.get('confirmPassword');

        if (!isValidEmail(email)) {
            setEmailError('Invalid email address');
            return;
        }

        if (!isValidFirstName(firstName)) {
            setFirstNameError('Invalid FirstName address');
            return;
        }

        if (!isValidConfirmPassword(password, confirmPassword)) {
            setConfirmPasswordError("Passwords don't match");
            return;
        }

        setEmailError('');
        setFirstNameError('');
        setConfirmPasswordError('');

        console.log({
            firstName: firstName,
            email: email,
            password: password,
        });
    }

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };


    const isValidConfirmPassword = (password, confirmPassword) => {
        if (password !== confirmPassword) {
            return false;
        }
        return true;
    };


    return (
        <ThemeProvider style theme={defaultTheme} >
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#EE8400' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" color="#006BA6" fontWeight="bold" fontSize="32px">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    error={!!firstNameError}
                                    helperText={firstNameError}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setFirstNameError(!isValidFirstName(value) ? 'Invalid FirstName address' : '');
                                    }}
                                />

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    error={!!emailError}
                                    helperText={emailError}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    error={!!confirmPasswordError}
                                    helperText={confirmPasswordError}
                                />

                            </Grid>
                        </Grid>
                        <Button style={{
                            backgroundColor: '#EE8400'
                        }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                            Sign Up
                        </Button>
                        <Grid container justifyContent="center">
                            <Grid item style={{
                                paddingBottom: '40px '
                            }}>
                                {/* <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link> */}
                                <RouterLink to='/SignIn'> Already have an account? Sign in</RouterLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}