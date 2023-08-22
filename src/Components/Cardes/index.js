import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Link } from 'react-router-dom';

import style from './style.css'


export default function HouseCard({ house }) {
    const [liked, setLiked] = React.useState(false);

    const { id } = house;
    const { url } = house;
    const { address } = house;
    const { price } = house;
    const { description } = house;
    const { bedroom } = house;
    const { bathroom } = house;
    const { type } = house;

    const handleLikeToggle = () => {
        setLiked(!liked);
    };

    return (

        <div className="card"
        >
            <Card sx={{ maxWidth: 340, }} className='imgCard'
                style={{ marginTop: '20px', }}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="295"
                        width="406"
                        image={url}
                        alt="green iguana"
                    />
                    <FavoriteIcon
                        sx={{
                            color: liked ? 'red' : 'white', 
                            position: 'absolute',
                            top: '13px',
                            right: '17px',
                            zIndex: 1,
                            fontSize: '30px'
                        }}
                        onClick={handleLikeToggle}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="p" component="div">
                            {address}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}

                        </Typography>

                        <Typography className='icon'
                            style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                            <LocalHotelIcon style={{
                                padding: "3px 10px 0 0",
                                fontSize: '28px',
                            }} />
                            {bedroom}
                            <BathtubIcon style={{
                                padding: "0px 10px 0 11px",
                            }} />

                            <span>{bathroom}</span>
                            <span style={{
                                paddingLeft: '130px',
                                fontWeight: 'bolder',
                                fontSize: '18px'
                            }}>{price}
                            </span>
                            <AttachMoneyIcon style={{
                                padding: "0px 0px 0px 2px",
                                color: 'red'
                            }} />
                        </Typography>

                    </CardContent>
                </CardActionArea>
                <CardActions className='cardActions'>
                    <Link to={`/details/${house.id}`}
                        size="small"
                        color="primary"
                        style={{
                            backgroundColor: '#EE8400',
                            alignItems: 'center',
                            fontWeight: 'bolder',
                            fontFamily: 'Istok Web',
                            fontSize: '20px',
                            textAlign: 'center',
                            textDecoration: 'none',
                            width: '100%',
                            height: '30px',
                        }}> More Details</Link>
                </CardActions>
            </Card>
        </div>
    );
}
