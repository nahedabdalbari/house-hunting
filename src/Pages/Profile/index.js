
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UserProfile from '../Profile/UserProfile';
import MyHouses from '../Profile/MyHouses';
import Myfavorite from '../Profile/MyFavorite';
import Addhouse from '../Profile/AddHouse';
import Person3Icon from '@mui/icons-material/Person3';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ControlPointIcon from '@mui/icons-material/ControlPoint';


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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="User Profile" {...a11yProps(0)} 
        icon={<Person3Icon/>} />
        <Tab label="My Houses" {...a11yProps(1)} 
        icon={<OtherHousesIcon/>} />
        <Tab label="Favorite" {...a11yProps(2)} 
        icon={<FavoriteIcon/>}/>
        <Tab label="Add House" {...a11yProps(3)}
        icon={<ControlPointIcon/>} />

      </Tabs>
      <TabPanel value={value} index={0}>
        <UserProfile/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MyHouses/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Myfavorite/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Addhouse/>
      </TabPanel>
      
    </Box>
  );
}

