import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import style from './style.css';

import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import img from "../../Components/Utilis/images/About.png"
import Footer from '../../Components/Footer';
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

    return (
        <div>
            <Container maxWidth="lg" style={{
                marginTop: '50px',
            }}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        <img src={house.url} alt="House"
                            style={{
                                width: '500px',
                                height: '400px'
                            }} />

                        <div style={{ display: 'flex', justifyContent: 'space-around', marginRight: '70px' }}>
                            <img src={img}
                                alt="House"
                                style={{
                                    width: '150px',
                                    height: '150px'
                                }} />
                            <img src={img}
                                alt="House"
                                style={{
                                    width: '150px',
                                    height: '150px'
                                }} />
                            <img src={img}
                                alt="House"
                                style={{
                                    width: '150px',
                                    height: '150px'
                                }} />
                        </div>
                    </Grid>


                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="h4" className="title"
                            style={{
                                color: '#001D58',
                                fontWeight: 'bold',
                                letterSpacing: '1.5px',
                                paddingBottom: '30px',
                            }}>
                            {house.title}
                        </Typography>

                        <div className="room" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="subtitle1" style={{ fontSize: '22px', marginRight: '10px' }}>
                                    <span> {house.bedroom}</span>
                                </Typography>
                                <LocalHotelIcon style={{ fontSize: '28px', padding: '0px 12px 0px 11px' }} />
                            </div>


                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="subtitle1" style={{ fontSize: '22px', marginRight: '10px' }}>
                                    <span>{house.bathroom}</span>
                                </Typography>
                                <BathtubIcon style={{ fontSize: '25px', padding: '0px 12px 10px 11px' }} />
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '230px' }}>
                                <AttachMoneyIcon style={{ fontSize: '30px', color: 'red' }} />
                                <Typography variant="subtitle1" style={{ fontSize: '22px', fontWeight: 'bold', color: 'red', marginLeft: '5px' }}>
                                    {house.price}
                                </Typography>
                            </div>

                        </div>


                        <div className="description">
                            <Typography variant="subtitle1" className="subtitle">
                                {house.description}
                            </Typography>
                        </div>


                        <div className='contact' style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{
                                display: 'flex', alignItems: 'center', fontWeight: 'bold',
                                color: '#000'
                            }}>
                                <PlaceIcon style={{
                                    marginRight: '20px',
                                    color: '#001D58',
                                    fontSize: '30px',
                                }} /> {house.address}
                            </span>

                            <span style={{
                                display: 'flex', alignItems: 'center',
                                color: '#000'
                            }}>
                                <PhoneIcon style={{
                                    marginRight: '20px',
                                    color: '#001D58',
                                    fontSize: '30px',
                                }} /> <p style={{ margin: '0' }}>059-11122112</p>
                            </span>

                            <span style={{
                                display: 'flex', alignItems: 'center',
                                color: '#000'
                            }}>
                                <EmailIcon style={{
                                    marginRight: '21px',
                                    color: '#001D58',
                                    fontSize: '28px',
                                }} /> <p style={{ margin: '0' }}>singleFam@gmail.com</p>
                            </span>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    );
}

export default Details;
