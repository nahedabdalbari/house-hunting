
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import BedIcon from '@mui/icons-material/Bed';
// import BathtubIcon from '@mui/icons-material/Bathtub';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { Link } from 'react-router-dom';
// import './style.css'
// // import { ListSubheader } from '@mui/material';


// export default function MediaCard({house}) {
//   const { photo, title, bedroom,bathroom,location,price,id } = house;
//   return (
//     <div className="styleCard" style={{
//       flex: '0 0 calc(33.333% - 16px) !important', 
//       margin: '50px 8px 16px',
      
//       maxWidth: '500px', 
//       boxSizing: 'border-box',
    
//     }}>
//       <Card sx={{ maxWidth: '100%' }}>
//         <CardMedia
//           component="img"
//           alt={title}
//           height="140"
//           image={photo}
//         />
//         <CardContent>


// <Typography gutterBottom variant="h5" component="div">
//             {title}
//           </Typography>

//           <Typography>
//           <BedIcon className='map-icon' />
//           <span className='loc-text'>
//           {bedroom} BedRoom      
//           </span>
          

//            <BathtubIcon className='map-icon' />
//            <span className='loc-text'>
//           {bathroom} BathRoom      
//           </span>

//           <LocationOnIcon className='map-icon' />
//            <span className='loc-text'>
//           {location} location      
//           </span>
//                  </Typography>
              
//           <Typography className='map-icon' variant="body2" color="text.secondary">
//             {price}$
//           </Typography>
//         </CardContent>
//         <CardActions>


    
//           <div className='btn-content'>
//           <Button className='btn-more' style={{backgroundColor:'#24AB70',color:'#fff',textTransform:'capitalize'} } size="small">
            
//             <Link to ={`/detailes/${id}`} className='link-text' >
//             More Details
//               </Link>
            
          
            
//             </Button> 
//             < FavoriteBorderIcon  className='icon'/>

//           </div>
          
//         </CardActions>
//       </Card>
//     </div>
//   );
// }



// ///////////////////////////////////////



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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import './style.css'

export default function MediaCard({ house }) {
  const { photo, title, bedroom, bathroom, location, price, id } = house;
  return (
    <>

<Grid item xs={3} sm={6} width="400px">

<Card sx={{ display: 'flex', flexDirection: 'column', height: '100%',width:'420px'}}>
      <CardMedia 

        component="img"
        alt={title}
        height="140"
        image={photo}
      />
      <CardContent sx={{ flexGrow: 1 ,display:'flex' }}>
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
            {location} 
          </span>
        </Typography>
        <Typography className='map-icon' variant="body2" color="text.secondary">
          {price}$
        </Typography>
      </CardContent>
      <CardActions>
        <div className='btn-content'>
          <Button
            className='btn-more'
            style={{ backgroundColor: '#24AB70', color: '#fff', textTransform: 'capitalize' }}
            size="small"
            component={Link}
            to={`/detailes/${id}`}
          >
            More Details
          </Button>
          <FavoriteBorderIcon className='icon' />
        </div>
      </CardActions>
    </Card>


    </Grid>
    </>
    





  
  );
}








