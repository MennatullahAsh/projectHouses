import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import user from "../../Components/Utilis/images/user.png"
import style from "./style.css"

import HouseInfo from "./houseInfo";
import AddHouse from './AddHouse';
import Favorites from './Favorites';
import { margin } from '@mui/system';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);
    const [profileData, setProfileData] = React.useState(null);

    React.useEffect(() => {
        fetch('https://my-json-server.typicode.com/MennatullahAsh/UsersAPI/users')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    setProfileData(data[0]);
                }
            })
            .catch(error => {
                console.error('Error fetching profile data:', error);
            });
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className='all'
            sx={{
                flexGrow: 1, bgcolor: 'background.paper',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 224,

            }}
        >
            <Tabs className='tap'
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 5, borderColor: 'divider' }}
                style={{
                    color: '#EE8400',
                    marginLeft: '100px',
                    marginTop:'100px'
                }}
            >
                <Tab className='tabs' label="Profile" {...a11yProps(0)} />
                <Tab className='tabs' label="Houses" {...a11yProps(1)} />
                <Tab className='tabs' label="Favorites" {...a11yProps(2)} />
                <Tab className='tabs' label="Add Houses" {...a11yProps(3)} />
            </Tabs>

            <div style={{ flex: 1, overflowY: 'auto', alignContent: 'center', }}>


                <TabPanel value={value} index={0}>
                    {profileData ? (
                        <div className="profile-container">
                            <img src={user} alt="user" className="user" />
                            <div className="user-details">
                                <div className="user-info">
                                    <h2>{profileData.userName}</h2>
                                    <table className='userTable'>
                                        <tbody>
                                            <tr>
                                                <td><span>Address:</span></td>
                                                <td>{profileData.address}</td>
                                            </tr>
                                            <tr>
                                                <td><span>Email:</span></td>
                                                <td>{profileData.email}</td>
                                            </tr>
                                            <tr>
                                                <td><span>Phone:</span></td>
                                                <td>{profileData.phone}</td>
                                            </tr>
                                            <tr>
                                                <td><span>Password:</span></td>
                                                <td>{profileData.password}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    ) : (
                        <p>Loading profile data...</p>
                    )}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <HouseInfo />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Favorites />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <AddHouse />
                </TabPanel>

            </div>
        </Box>
    );
}
