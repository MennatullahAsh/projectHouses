import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Link } from 'react-router-dom';
import style from './style.css'

export default function HouseCard({ house, onToggleFavorite, isFavorite }) {
    const [liked, setLiked] = React.useState(false);

    const { id, url, address, price, description, bedroom, bathroom, type, title } = house;

    const handleLikeToggle = () => {
        setLiked(!liked);
        onToggleFavorite(house);
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
                        <Typography gutterBottom variant="p" component="div" style={{fontWeight:'bolder'}}>
                            {title}
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

                            {bathroom}
                            <span style={{
                                paddingLeft: '130px',
                                fontWeight: 'bolder',
                                color: '#EE8400',
                                fontSize: '18px'
                            }}>{price}
                            </span>
                            <AttachMoneyIcon style={{
                                padding: "0px 0px 0px 2px",

                            }} />
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            {description.split("").splice(0, 115).join("")}
                        </Typography>

                      
                    </CardContent>
                </CardActionArea>
                <CardActions className='cardActions'>
                    <Link to={`/Details/${id}`}
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
