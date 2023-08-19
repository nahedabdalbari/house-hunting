import React  from 'react'; 
import { useEffect,useState } from 'react';
import img from '../../Util/images/hero-back.png'
import  "./style.css"
import CardContainer from '../../Components/CardContainer';



const Landing = ()=> {

  const [house, setHouse] = useState([]);
  const getHouse = async () => {
      const response = await fetch("https://my-json-server.typicode.com/nahedabdalbari/mock-api/house");
      const FinalData = await response.json();
      console.log(response.url)
      setHouse(FinalData)
  }


          //useEffect()
          useEffect(() => {
              getHouse();
             
               }, []
                )

    return <>

    <div className='hero-part'>
    <img className = 'img-hero' src={img} alt=''/>
    <h1 className='head-hero'>Find your home with the people you trust.</h1>
    <form>
     <input type='text' placeholder='Search House'/>
      <button type='sumbit'>Search</button>
     
    </form>

    </div>
<div className='card-style'>
<CardContainer houses={house} />

</div>
  
    

    </>
    
}

export default Landing


