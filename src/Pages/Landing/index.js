import React  from 'react'; 
import img from '../../Util/images/hero-back.png'
import  "./style.css"



const Landing = ()=> {

//   useEffect()

    return <>
    <div className='hero-part'>
    <img className = 'img-hero' src={img} alt=''/>
    <h1 className='head-hero'>Find your home with the people you trust.</h1>
    <form>
     <input type='text' placeholder='Search House'/>
      <button type='sumbit'>Search</button>
     
    </form>

    </div>
    

    </>
    
}

export default Landing


