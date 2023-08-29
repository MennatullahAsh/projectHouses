import React from 'react';
import { Container, Typography } from '@mui/material';
import './style.css'; 
// import { FaChessKing } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <Container className="container">
            {/* <FaChessKing className="icon" /> */}
            <div className="overlay">
                 <Typography variant="h4" gutterBottom>
                    <h1>404</h1>
                    <span>Oops!</span> Page not found
                 </Typography>
                 <Typography variant="body1" paragraph className="paragraph">
                     The page you are looking for might have been removed or is temporarily unavailable.
                 </Typography>
            </div>
        </Container>
    );
};

export default ErrorPage;


