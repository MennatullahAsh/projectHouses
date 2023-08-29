import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import './style.css';
import CircularProgress from '@mui/material/CircularProgress';

function AddHouseForm({ onAddHouse }) {
    const [address, setAddress] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [details, setDetails] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (showConfirmation) {
            const timeout = setTimeout(() => {
                setShowConfirmation(false);
            }, 3000);
            return () => clearTimeout(timeout);
        }
    }, [showConfirmation]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const newHouse = {
            address: address,
            title: title,
            price: price,
            details: details,
            bathrooms: bathrooms,
            bedrooms: bedrooms,
            image: image
        };
        await new Promise((resolve) => setTimeout(resolve, 2000)); // انتظار لمدة 2 ثانية

        onAddHouse(newHouse);
        setAddress('');
        setTitle('');
        setPrice('');
        setDetails('');
        setBathrooms('');
        setBedrooms('');
        setShowConfirmation(true);
        setImage(null);
        setIsLoading(false);
    };

    return (
        <div className="form-container">
            {showConfirmation && (
                <div className="confirmation-popup">
                    Added These House Successfully!
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="form-label">
                    <TextField
                        style={{ width: '450px' }}
                        label="Address"
                        variant="outlined"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="form-label">
                    <TextField
                        style={{ width: '450px' }}
                        label="Title"
                        variant="outlined"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-label">
                    <TextField
                        style={{ width: '450px' }}
                        label="Price"
                        variant="outlined"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="form-label">
                    <TextField
                        style={{ width: '450px' }}
                        label="Details"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                    />
                </div>
                <div className="room">
                    <div className="form-label">
                        <TextField
                            label="Bathrooms"
                            variant="outlined"
                            type="number"
                            value={bathrooms}
                            onChange={(e) => setBathrooms(e.target.value)}
                        />
                    </div>
                    <div className="form-label">
                        <TextField
                            label="Bedrooms"
                            variant="outlined"
                            type="number"
                            value={bedrooms}
                            onChange={(e) => setBedrooms(e.target.value)}
                        />
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    gap: '90px',
                    padding: '0 15px'
                }}>
                    <div className="form-label">
                        <label>
                            Add Image <br />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </label>
                    </div>
                    <div className="form-label">
                        <Button
                            className='form-button'
                            style={{
                                backgroundColor: '#001D58',
                                color: 'white',
                                border: 'none',
                                padding: ' 5px 18px',
                                fontWeight: 'bolder',
                                letterSpacing: '2px',
                                fontSize: '18px',
                                cursor: 'pointer',
                            }}
                            variant="contained"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? <CircularProgress
                                color="primary"
                                size={30}
                            /> : 'Save'}
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddHouseForm;
