import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './style.css';
import img from '../../Util/images/det.jpg';
import img1 from '../../Util/images/onedet.jpg';
import img2 from '../../Util/images/twode.jpg';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const PropertyDetailsPage = () => {
  return (
    <>
    <div className="root" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <img src={img} alt="Property" className="image" />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={img1} alt="Property" className="smallerImage" />
          <img src={img2} alt="Property" className="smallerImage" />
          <img src={img1} alt="Property" className="smallerImage" />
        </Grid>

      </Grid>
      </div>
      <div className='bottom-side' >
      <div className='left-side'>
      <Typography variant="h4">About this Home</Typography>
      <Typography>
          <BedIcon className='map-icon' />
          <span className='loc-text'>
          {/* {bedroom} BedRoom       */}
          </span>
          

           <BathtubIcon className='map-icon' />
           <span className='loc-text'>
          {/* {bathroom} BathRoom       */}
          </span>

          <LocationOnIcon className='map-icon' />
           <span className='loc-text'>
          {/* {location} location       */}
          </span>
                 </Typography>
                 <Typography className='map-icon' variant="body2" color="text.secondary">
            {/* {price}$ */}
          </Typography>
          <p>Lincoln Park Condo is huge! Beautiful house in a beautiful building in a beautiful neighborhood. High end finishes include hardwood floors, granite counters, maple cabinets, stainless appliances, Horton lighting fixtures, and wall to wall windows throughout! Relaxing views of Lincoln Park. Tons of wardrobe space in the largest single bedroom in the bedroom. Gorgeous pool with views of the lake, aerial show, Chicago skyline, North Avenue beach...large sundeck with grills and party room. 

          </p>
      </div>
      <div className='right-side'></div>
      </div>
    </>
    
      

    
  );
};

export default PropertyDetailsPage;
