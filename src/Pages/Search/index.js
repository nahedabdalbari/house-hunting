import React, { useState } from 'react';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { Search } from '@mui/icons-material';

function App() {
  const [searchType, setSearchType] = useState('rent');
  const [location, setLocation] = useState('');
  const [numRooms, setNumRooms] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSearchClick = () => {
    // Handle search logic here
  };

  return (
    <div className="App">
      <h1>Real Estate Search</h1>
      <div>
        <TextField label="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        <FormControl>
          <InputLabel>Number of Rooms</InputLabel>
          <Select value={numRooms} onChange={(e) => setNumRooms(e.target.value)}>
            <MenuItem value=""><em>Any</em></MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            {/* ... More options */}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Price Range</InputLabel>
          <Select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
            <MenuItem value=""><em>Any</em></MenuItem>
            <MenuItem value="cheap">Cheap</MenuItem>
            <MenuItem value="moderate">Moderate</MenuItem>
            <MenuItem value="expensive">Expensive</MenuItem>
            {/* ... More options */}
          </Select>
        </FormControl>
      </div>
      <RadioGroup row aria-label="searchType" name="searchType" value={searchType} onChange={handleSearchTypeChange}>
        <FormControlLabel value="rent" control={<Radio />} label="For Rent" />
        <FormControlLabel value="sale" control={<Radio />} label="For Sale" />
      </RadioGroup>
      <Button variant="contained" onClick={handleSearchClick} startIcon={<Search />}>Search</Button>
    </div>
  );
}

export default App;
