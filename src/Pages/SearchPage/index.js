import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
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

import axios from 'axios';


const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(1),
    },
    '& .MuiInputBase-input': {
        borderRadius: 9,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #001D58',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 9,
            borderColor: '#001D58',
            boxShadow: '0 0 0 0.2rem rgba(0,29,88,0.4)',
        },
    },
}));

export default function SelectLabels() {
    const [age, setAge] = useState('');
    const [location, setLocation] = useState('');
    const [bedroom, setBedroom] = useState('');
    const [bathroom, setBathroom] = useState('');

    const [matchingHouses, setMatchingHouses] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://my-json-server.typicode.com/MennatullahAsh/mockApi/house');
            setMatchingHouses(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'age') setAge(value);
        if (name === 'location') {
            setLocation(value);
            fetchData();
        }
        if (name === 'bedroom') {
            setBedroom(value);
            fetchData();
        }
        if (name === 'bathroom') {
            setBathroom(value);
            fetchData();
        }
    };

    return (
        <div style={{
            width: '70%',
            margin: '30px auto 0 auto',
        }}>
            <div style={{
                width: '70%',
                margin: 'auto', display: 'flex', alignItems: 'center' , gap:'120px' }}>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <InputBase
                        sx={{ ml: 5, flex: 1 }}
                        placeholder="Search .."
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search" style={{
                        color:'#EE8400',
                        fontWeight:'bolder',
                    }}>
                        <SearchIcon />
                    </IconButton>
                </Paper>

                <FormControl sx={{ marginLeft: '20px' }}>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue=""
                        name="radio-buttons-group"
                        style={{
                            color: '#001D58',
                            fontWeight: 'bolder',
                        }}
                    >
                        <FormControlLabel value="For sale"  control={<Radio />} label="For sale"  />
                        <FormControlLabel value="For rent" control={<Radio />} label="For rent" />
                    </RadioGroup>
                </FormControl>
            </div>



            <div style={{ display: 'flex', justifyContent: 'center', gap:'50px'}}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label" >Location</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={location}
                        name="location"
                        onChange={handleChange}
                        style={{ width: '200px' }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Gaza-Alnasr</MenuItem>
                        <MenuItem value={20}>Gaza-Alwahda</MenuItem>
                        <MenuItem value={30}>Gaza-Alrimal</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        value={bedroom}
                        name="bedroom"
                        onChange={handleChange}
                        displayEmpty
                    >
                        <MenuItem value="">
                            <em>Bedroom</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        value={bathroom}
                        name="bathroom"
                        onChange={handleChange}
                        displayEmpty
                    >
                        <MenuItem value="">
                            <em>Bathroom</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                    </Select>
                </FormControl>



            </div>

        </div>
    );
}

