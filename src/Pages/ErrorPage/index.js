import React from 'react';
import { Container, Typography } from '@mui/material';
import './style.css'; 

const ErrorPage = () => {
    return (
        <Container className="container">
            <div className="overlay">
                 <Typography variant="h4" gutterBottom>
                    <h1>404</h1>
                    <span style={{ color:'#EE8400'}}>Oops!</span> Page not found
                 </Typography>
                 <Typography variant="body1" paragraph className="paragraph">
                     The page you are looking for might have been removed or is temporarily unavailable.
                 </Typography>
            </div>
        </Container>
    );
};

export default ErrorPage;


