import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import DeleteIcon from '@mui/icons-material/Delete';
import { fontSize } from '@mui/system';

function HouseInfo() {
    const [housesData, setHousesData] = useState([]);
    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
    const [editHouseDialogOpen, setEditHouseDialogOpen] = useState(false);
    const [selectedHouseIndex, setSelectedHouseIndex] = useState(null);
    const [editedHouseData, setEditedHouseData] = useState({});


    useEffect(() => {
        fetch('https://my-json-server.typicode.com/MennatullahAsh/mockApi/house')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setHousesData(data);
                }})
            .catch(error => {
                console.error('Error fetching houses data:', error);
            });
    }, []);
    const handleDeleteHouse = () => {
        if (selectedHouseIndex !== null) {
            const updatedHousesData = [...housesData];
            updatedHousesData.splice(selectedHouseIndex, 1);
            setHousesData(updatedHousesData);
            setDeleteConfirmationOpen(false);
        }
    };

    const handleOpenDeleteConfirmation = (index) => {
        setSelectedHouseIndex(index);
        setDeleteConfirmationOpen(true);
    };

    const handleCloseDeleteConfirmation = () => {
        setSelectedHouseIndex(null);
        setDeleteConfirmationOpen(false);
    };

    const handleOpenEditHouseDialog = (index) => {
        setSelectedHouseIndex(index);
        setEditedHouseData(housesData[index]);
        setEditHouseDialogOpen(true);
    };

    const handleCloseEditHouseDialog = () => {
        setSelectedHouseIndex(null);
        setEditHouseDialogOpen(false);
    };

    return (
        <div className="houses-container">
            {housesData.map((house, index) => (
                <div key={index} className="houseCard">
                    <div className="house-content">
                        <div className="house-info">
                        <img src={house.url} alt="house" className='house' />
            
                            <table className='tableHouse'>
                                <tr>
                                    <td><span> Address: </span></td>
                                    <td className='p'> {house.address} </td>
                                </tr>
                                <tr>
                                    <td><span> Price: </span></td>
                                    <td className='p'> {house.price} </td>
                                </tr>
                                <tr>
                                    <td><span>Description:</span></td>
                                    <td className='p'>  {house.description.split("").splice(0, 115).join("")} </td>
                                </tr>
                                <tr >
                                    <td><span> Bedroom : </span></td>
                                    <td className='p'>  {house.bedroom}  <span style={{ marginLeft: '150px' }} > Bathroom : </span> {house.bathroom} </td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td><span> Type : </span></td>
                                    <td> {house.type} </td>
                                </tr>
                            </table>
                            <DeleteIcon variant="contained" color="error" onClick={() => handleOpenDeleteConfirmation(index)}
                             style={{ marginLeft: '540px' ,fontSize:'40px'}} />
                        </div>
                    </div>
                </div>
            ))}
            <Dialog
                open={deleteConfirmationOpen}
                onClose={handleCloseDeleteConfirmation}
            >
                <DialogTitle>Delete Confirmation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this house?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDeleteConfirmation} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDeleteHouse} color="error" variant="contained">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
            
        </div>
    );
}

export default HouseInfo;
