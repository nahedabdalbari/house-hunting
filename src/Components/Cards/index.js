
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './style.css'
// import { ListSubheader } from '@mui/material';


export default function MediaCard({house}) {
  const { photo, title, bedroom,bathroom,location,price } = house;
  return (
    <div className="styleCard" style={{
      flex: '0 0 calc(33.333% - 16px)', 
      margin: '50px 8px 16px',
      
      maxWidth: '500px', 
      boxSizing: 'border-box',
    
    }}>
      <Card sx={{ maxWidth: '100%' }}>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={photo}
        />
        <CardContent>


<Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>

          <Typography>
          <BedIcon className='map-icon' />
          <span className='loc-text'>
          {bedroom} BedRoom      
          </span>
          

           <BathtubIcon className='map-icon' />
           <span className='loc-text'>
          {bathroom} BathRoom      
          </span>

          <LocationOnIcon className='map-icon' />
           <span className='loc-text'>
          {location} location      
          </span>
                 </Typography>
              
          <Typography className='map-icon' variant="body2" color="text.secondary">
            {price}$
          </Typography>
        </CardContent>
        <CardActions>
          
          <Button className='btn-more' style={{backgroundColor:'#24AB70',color:'#fff'} } size="small">More Details</Button> 
        </CardActions>
      </Card>
    </div>
  );
}









