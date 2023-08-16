


import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import house from '../Utilis/images/house.png';

export default function HouseCard() {
    const [liked, setLiked] = React.useState(false);

    const handleLikeToggle = () => {
        setLiked(!liked);
    };

    return (
         

        <Card sx={{ maxWidth: 345 }} style={{ padding: '20px 40px' }}>
            <Typography gutterBottom variant="h4" component="div">
        Best Houses
            </Typography>


            <CardActionArea>
                <CardMedia
                    component="img"
                    height="295"
                    width="406"
                    image={house}
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
                        fontSize:'30px'
                    }}
                    onClick={handleLikeToggle}
                />
                <CardContent>
                    <Typography gutterBottom variant="p" component="div">
                        Vila
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
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
    );
}
