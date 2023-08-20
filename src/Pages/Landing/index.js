import React, { useEffect, useState } from 'react';
import Cards from '../../Components/Cardes'
import CardContainer from '../../Components/CardContainer';
import Typography from '@mui/material/Typography';



const Landing = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/MennatullahAsh/mockApi/house')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('ERROR', error));
    }, []);

    return (
        <>
            <Typography variant="h4" align="center" gutterBottom style={
                {paddingTop:'30px',
                fontWeight:'bold'
            }
            }>
                Best Seller House
            </Typography>

{console.log(data, 'houses')}
        <CardContainer houses={data}/>
       
        </>
    );
}


export default Landing;







