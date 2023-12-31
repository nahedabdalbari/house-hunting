import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './style.css';
import img from '../../Util/images/det.jpg';
import img1 from '../../Util/images/onedet.jpg';
import img2 from '../../Util/images/twode.jpg';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import {useParams} from 'react-router-dom'


const Details = () => {

  const {id} = useParams();
  
  const [house, setHouse] = useState([]);
  const getHouse = async () => {
      const response = await fetch(`https://my-json-server.typicode.com/nahedabdalbari/mock-api/house/${id}`);
      const FinalData = await response.json();
      console.log(response.url)
      setHouse(FinalData)
  }


          //useEffect()
          useEffect(() => {
              getHouse();
             
               }, [id]
                )
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
        {/* <Grid item xs={12} md={6}> */}
          <div class='ownerInfo'>
            <div className='owner'>
            <h2>Contact with Owner</h2>
            </div>
            <div className='info'>
            <Typography>
              <div>
              <PersonIcon className='info-icon' />
          <span className='info-text'>
           {'Nahed Abdalbari'}  Person
          </span>
              </div>
        
          
<div>
<EmailIcon className='info-icon' />
           <span className='info-text'>
          {'nahedabdalbari@gmail.com'} Email      
          </span>
</div>
          
<div>

<CallIcon className='info-icon' />
           <span className='info-text'>
          {'0597745986'} Call      
          </span>
</div>
                 </Typography>
                 </div>
          
          </div>
        {/* </Grid> */}

      </Grid>
      </div>
      <div className='bottom-side' >
      <div className='left-side'>
      <Typography variant="h4">About this Home</Typography>
      <Typography>
          <BedIcon className='map-icon' />
          <span className='loc-text'>
          {house.bedroom} BedRoom      
          </span>
          

           <BathtubIcon className='map-icon' />
           <span className='loc-text'>
          {house.bathroom} BathRoom      
          </span>

          <LocationOnIcon className='map-icon' />
           <span className='loc-text'>
          {house.location} location      
          </span>
                 </Typography>
                 <Typography className='map-icon' variant="body2" color="text.secondary">
            {house.price}$
          </Typography>
          <p>Lincoln Park Condo is huge! Beautiful house in a beautiful building in a beautiful neighborhood. High end finishes include hardwood floors, granite counters, maple cabinets, stainless appliances, Horton lighting fixtures, and wall to wall windows throughout! Relaxing views of Lincoln Park. Tons of wardrobe space in the largest single bedroom in the bedroom. Gorgeous pool with views of the lake, aerial show, Chicago skyline, North Avenue beach...large sundeck with grills and party room. Lincoln Park Condo is huge! Beautiful house in a beautiful building in a beautiful neighborhood. High end finishes include hardwood floors, granite counters, maple cabinets, stainless appliances, Horton lighting fixtures, and wall to wall windows throughout! Relaxing views of Lincoln Park. Tons of wardrobe space in the largest single bedroom in the bedroom. Gorgeous pool with views of the lake, aerial show, Chicago skyline, North Avenue beach...large sundeck with grills and party room. 

          </p>
      </div>
      <div className='right-side'></div>
      </div>
    </>
    
      

    
  );
};

export default Details;
