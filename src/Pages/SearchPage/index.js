
import SearchIcon from '@mui/icons-material/Search';
import React,{useEffect,useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Button } from '@mui/material';
import CardContainer from '../../Components/CardContainer';
import CircularProgress from '@mui/material/CircularProgress';
// import { Link, useNavigate } from 'react-router-dom';
// import { BrowserRouter as  Redirect } from 'react-router-dom';
import './style.css';
// import notFound  from '../notFound';



export default function SearchPage() {

  // const navigate = useNavigate();
  // function navToNotFound(){
  // navigate('*')
  // }
  



  const [location, setLocation] = React.useState('');
  const [type, setType] = React.useState('');
  const [rooms, setRooms] = React.useState(0);
  const [price, setPrice] = React.useState('');
  const [filter,setFilter]=React.useState([]);
  const [loading, setLoading] = useState(true);
  // const [open, setOpen] = React.useState(false);


  
  
          





  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  const handleChangetype = (event) => {
    setType(event.target.value);
  };
  const handleChangeroom = (event) => {
    setRooms(event.target.value);
  };
  const handleChangeprice = (event) => {
    setPrice(event.target.value);
  };


  

// Fetch house from Api 
const [house, setHouse] = useState([]);
  const getHouse = async () => {
      const response = await fetch("https://my-json-server.typicode.com/nahedabdalbari/mock-api/house");
      const FinalData = await response.json();
      console.log(response.url)
      setLoading(false)
      setHouse(FinalData)
  }


          //useEffect()
          useEffect(() => {

            const delay = setTimeout(() => {
              getHouse();
            },10000);

            return ()=>clearTimeout(delay);
             
               }, []
                )

                const handelFilter=(event)=>{
                  event.preventDefault();
                let filterarray =  house
                .filter((house)=> (!location ? true :house.location === location))
      
      .filter((house) => (!rooms ? true : house.room === parseInt(rooms)))
      .filter((house) => (!type ? true : house.status ===(type)))
      .filter((house) => (!price ? true : house.price ===parseInt(price)));
                 setFilter(filterarray);
                  }
                
              
              
              
              
                
              
                  
                

  return (
    <div>

        <form>
     <input type='text' placeholder='Search House'  />
     <Button className='btn-search'  onClick={handelFilter} style={{color:'#24AB70'}}> Search</Button>
    
    
     
    </form>



      {/* <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
        Open the select
      </Button> */}
      <div className='select'>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Location</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          // open={open}
          // onClose={handleClose}
          // onOpen={handleOpen}
          value={location}
          label="Location"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Gaza"}>Gaza</MenuItem>
          <MenuItem value={"Rafah"}>Rafah</MenuItem>
          <MenuItem value={"Khan youins"}>Khan Yunis</MenuItem>
        </Select>
      </FormControl>


      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Type</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          // open={open}
          // onClose={handleClose}
          // onOpen={handleOpen}
          value={type}
          label="Age"
          onChange={handleChangetype}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Rent"}>Rent</MenuItem>
          <MenuItem value={"Sale"}>Sale</MenuItem>
        
        </Select>
      </FormControl>


      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Rooms</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          // open={open}
          // onClose={handleClose}
          // onOpen={handleOpen}
          value={rooms}
          label="Rooms"
          onChange={handleChangeroom}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          
        </Select>
      </FormControl>

      <Box width={300}>
    <h5>Price</h5>
      <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" onChange={handleChangeprice} />
    </Box>


      </div>



      <div className='filter-card'>

      {/* <h1>API Data Fetching with Progress Bar</h1> */}
      {loading ? (
        <div className="progress-bar"><CircularProgress/></div>
      ) : (
        <div className="data">
          <h3 className='filter-text'>{filter.length}houses valiable</h3>
        <CardContainer className='card' houses={filter} />
        </div>
      )}




        {/* <h3 className='filter-text'>{filter.length}houses valiable</h3> */}
        {/* <h6>{filter.length === 0 ||<Link to ={navToNotFound}/>}
          </h6> */}

        
        {/* <CardContainer className='card' houses={filter} /> */}
      
      </div>
    
    </div>
  );
}