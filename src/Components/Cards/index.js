// import  React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function MediaCard({house}) {
//     const { location, title, description } = house;
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image="https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg"
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//        {title} 
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
// {description}       {location}  
//         </Typography>
//       </CardContent>
//       <CardActions>
      
//         <Button size="small"> view  More</Button>
//       </CardActions>
//     </Card>
//   );
// }
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard(house) {
  const { photo, title, bedroom,bathroom,location,price } = house;
  return (
    <div className="styleCard" style={{
      flex: '0 0 calc(33.333% - 16px)', 
      margin: '0 8px 16px',
      maxWidth: '345px', 
      boxSizing: 'border-box'
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
          <Typography variant="body2" color="text.secondary">
            {bedroom}, {bathroom}, {location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          
          <Button size="small">More Details</Button> 
        </CardActions>
      </Card>
    </div>
  );
}









