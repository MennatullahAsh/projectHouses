import React, { useEffect, useState } from 'react';
import Cards from '../../Components/Cardes'
import CardContainer from '../../Components/CardContainer';
// import { get } from '../../api'; 

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
{console.log(data, 'houses')}
        <CardContainer houses={data}/>
       
        </>
    );
}


export default Landing;







