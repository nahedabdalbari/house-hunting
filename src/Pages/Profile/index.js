import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Houses from "./Houses";
import Favorite from './Favorite';
import Addhouse from './Addhouse';
import Person3Icon from '@mui/icons-material/Person3';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import  "./style.css";


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
        <Box
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
                
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
              
                {/* <Tab label="Profile"  
                 className="tab"
                icon={<Person3Icon/>}
                {...a11yProps(0)} /> */}
                <Tab
                label="Profile"
                className="tab"
                {...a11yProps(0)}
                icon={<Person3Icon />}
              />

                <Tab  label="My Houses"
                className="tab"
                icon={<OtherHousesIcon/>}
                 {...a11yProps(1)} />
                <Tab label="Favorite" 
                  className="tab"
                  icon={<FavoriteIcon/>} 
                {...a11yProps(2)}/>
  
                <Tab  label="Add Houses" 
                className="tab"
                icon={<ControlPointIcon/>}
                {...a11yProps(3)} 
                />
            </Tabs>
            <TabPanel value={value} index={0}>
                {profileData ? (
                    <div className="profile-container">
                  
                        <div className="user-details">
                            <div className="user-info">
    <h2>Hello {profileData.userName}</h2>
    <table>
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
                <Houses/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Favorite/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Addhouse/>
            </TabPanel>
        </Box>
    );
}