
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


        // <Typography gutterBottom variant="h4" component="div">
        //     Best Houses
        // </Typography> 

        <div className="card"
        >
            <Card sx={{ maxWidth: 340, }} className='imgCard'
                style={{ marginTop: '30px', }}>

                <CardActionArea  >
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
                            // border: '1px solid red', 
                            // borderRadius: '50%', 
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
                            <LocalHotelIcon style={{ padding: "3px 10px 0 0",
                        fontSize:'28px', }} />
                             {bedroom}
                            <BathtubIcon style={{ padding: "3px 10px 0 11px" }} />
                             {bathroom}
                        </Typography>




                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        size="small"
                        color="primary"
                        style={{
                            backgroundColor: '#EE8400',
                            alignItems: 'center',
                            fontWeight: 'bolder',
                            fontSize: '10px',
                            width: '100%',
                            height: '30px',
                        }}
                    >
                        More Details
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}
