import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import CardContainer from "../../Components/CardContainer";
import { TextField } from '@mui/material';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
}));


export default function SelectLabels() {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [bedroom, setBedroom] = useState();
    const [bathroom, setBathroom] = useState();
    const [type, setType] = useState('');
    const [selectedType, setSelectedType] = useState('');

    const [housesData, setHousesData] = useState([]);
    const [filteredHouses, setFilteredHouses] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://my-json-server.typicode.com/MennatullahAsh/mockApi/house');

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setHousesData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSearch = (event) => {
        event.preventDefault();
        const filteredHouses = housesData.filter((house) =>
            (bedroom === undefined || house.bedroom === +bedroom))
            .filter((house) => (bathroom === undefined || house.bathroom === +bathroom))
            .filter((house) => (title === '' || house.title.includes(title)))
            .filter((house) => (selectedType === '' || house.type === selectedType))
            .filter((house) => (location === '' || house.address.toLowerCase().includes(location.toLowerCase())));

        setFilteredHouses(filteredHouses);
    };


    const handleResetFilter = () => {
        setLocation('');
        setBedroom('');
        setBathroom('');
        setTitle('');
        setType('');
        setFilteredHouses([]);
    };

    const handleBedroomChange = (event) => {
        setBedroom(event.target.value);
    };

    const handleBathroomChange = (event) => {
        setBathroom(event.target.value);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    return (
        <div style={{
            marginTop: ' 50px ',
            marginBottom: '300px'
        }}>
            <div style={{
                width: '70%',
                margin: 'auto', display: 'flex', alignItems: 'center', gap: '120px'
            }}>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <InputBase sx={{ ml: 5, flex: 1 }}
                        placeholder="Search .."
                        inputProps={{ 'aria-label': 'search google maps' }}
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search" style={{
                        color: '#EE8400',
                        fontWeight: 'bolder',
                    }}>
                        <SearchIcon />
                    </IconButton>
                </Paper>

                <FormControl sx={{ marginLeft: '20px' }} >
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={selectedType}
                        onChange={(event) => setSelectedType(event.target.value)}

                    >
                        <FormControlLabel value="sale" control={<Radio />} label="For sale" style={{ color: '#001D58', fontWeight: 'bolder' }} />
                        <FormControlLabel value="rent" control={<Radio />} label="For rent" style={{ color: '#001D58', fontWeight: 'bolder' }} />
                    </RadioGroup>
                </FormControl>

            </div>

            <div style={{
                display: 'flex', justifyContent: 'center', gap: '50px',
                marginBottom: '50px'
            }}>

                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <TextField
                        placeholder='Bedroom'
                        value={bedroom}
                        name="bedroom"
                        type='number'
                        onChange={handleBedroomChange}
                        displayEmpty
                    />
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <TextField
                        placeholder='Bathroom'
                        value={bathroom}
                        name="bathroom"
                        type='number'
                        onChange={handleBathroomChange}
                        displayEmpty
                    />
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        value={title}
                        onChange={handleTitleChange}
                        displayEmpty
                    >
                        <MenuItem value="">
                            <em> House title </em>
                        </MenuItem>
                        <MenuItem value="Private house">Private house</MenuItem>
                        <MenuItem value="Apartment">Apartment</MenuItem>
                        <MenuItem value="Vila">Vila</MenuItem>
                    </Select>
                </FormControl>

                <Button
                    variant="contained"
                    onClick={handleSearch}
                    style={{
                        backgroundColor: '#001D58',
                        color: 'white',
                        height: '50px',
                        letterSpacing: '1px',
                        fontWeight: 'bolder',
                        marginTop: '10px'
                    }}>
                    Search
                </Button>
            </div>

            <div>
                <CardContainer houses={filteredHouses} />
            </div>
        </div>

    );
}


