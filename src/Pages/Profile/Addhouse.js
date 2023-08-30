import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';

const Addhouse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [rooms, setRooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [location, setLocation] = useState('');

  const handleSave = () => {
    // قم بمعالجة البيانات هنا (مثل إرسالها إلى الخادم)
    console.log({
      title,
      description,
      price,
      rooms,
      bathrooms,
      location,
    });
  };

  const handleCancel = () => {
    // قم بإعادة تعيين الحالة هنا
    setTitle('');
    setDescription('');
    setPrice('');
    setRooms('');
    setBathrooms('');
    setLocation('');
  };

  return (
    <Container maxWidth="sm" className='style-content'>
      <Typography variant="h4" gutterBottom>
      Add new House
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Price"
            fullWidth
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Bedhroom" 
            fullWidth
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Bathrooms"
            fullWidth
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Location"
            fullWidth
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          {/* <label>Image</label>
          <input type="file" accept="image/*" /> */}
                    <TextField
            label="img"
            fullWidth
            value={File}
            type='File'
            accept='img'
            onChange={(e) => setLocation(e.target.value)}
          />
        </Grid>
        <Grid item xs={6} lg={12} >
  
          <Button className='btn-save' variant="contained"  onClick={handleCancel}>
          Cancel
          </Button>
          <Button className='btn-save' variant="contained"  onClick={handleSave}>
            Save
          </Button>
        </Grid>

      </Grid>
    </Container>
  );
};

export default Addhouse;
