import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Details() {
    const { id } = useParams();
    const [house, setHouse] = useState({});

    useEffect(() => {
        async function fetchHouse() {
            try {
                const response = await fetch(`https://my-json-server.typicode.com/MennatullahAsh/mockApi/house/${id}`);
                if (!response.ok) {
                    throw new Error("Network Error");
                }
                const house = await response.json();
                setHouse(house);
            } catch (error) {
                console.error(error);
            } 
        }
        fetchHouse();
    }, [id]);

    // const { url, description, address, price, bedroom, bathroom, type } = house;

    return (
        <Container maxWidth="lg" >
            {
                (
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography variant="h4" className="title">
                                {house.address}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} className="room">
                            <div className="description">
                                <Typography variant="subtitle1" className="subtitle">
                                    {house.description}
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} className="room">
                            <div className="description">
                                <Typography variant="subtitle1" className="subtitle">
                                    {house.bedroom}
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} className="room">
                            <div className="description">
                                <Typography variant="subtitle1" className="subtitle">
                                    {house.bathroom}
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                )}
        </Container>
    );
}

export default Details;
