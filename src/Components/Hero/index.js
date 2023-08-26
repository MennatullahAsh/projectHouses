import React from "react";
import Box from "@mui/material/Box";
import SearchIcon from '@mui/icons-material/Search';
import './style.css';

import hero from '../Utilis/images/hero.png';
import { Link } from "react-router-dom";


function Hero() {
    return (
        <div className="hero">
            <div className="hero-overlay">
                <h1>The right partner for housing rental <br></br>
                    & property management!</h1>

                <div className="input-container">
                    <Box sx={{ marginTop: 2 }}>
                        <Link to='/Search' >
                        <input type="text" placeholder="Search "
                            style={{
                                width: '500px',
                                height: '45px',
                                border: '0.2px solid #001D58',
                                borderRadius: '25px',
                                position: 'relative',
                                paddingLeft:'30px'
                            }}
                            />
                        <SearchIcon style={{
                            color: '#EE8400',
                            fontSize:'30px',
                            fontWeight:'bolder',
                            position: 'absolute',
                            right: '190',
                            bottom:'10',
                        }} />
                        </Link>
                    </Box>
                </div>
            </div>
            <img
                src={hero}
                alt=""
                className="hero-image"
            />
        </div>
    );
}

export default Hero;
