import React from 'react';
import {Layout, Landing} from '../Pages';
import {Route,Routes } from 'react-router-dom';
import About from '../Pages/About';
import Details from '../Pages/Detailes';
import SearchPage from '../Pages/SearchPage';
import NotFound from '../Pages/NotFound';
// import Login from '../Pages/Login';
import Loginpop from '../Components/Loginpop';


function App() {
  return (
    <Layout className="App">


      <Routes>
           <Route path="/" element={<Landing/>}/>
          <Route path="/aboutus" element={<About />} />
             <Route path={`/detailes/:id`} element={<Details />} />
        
          <Route path="/SearchPage" element={<SearchPage />} />
          {/* <Route path="/Login" element={<Login/>} /> */}

          <Route path="/Loginpop" element={<Loginpop/>} />


          <Route path='*' element={<NotFound />}/>
        
        
      </Routes>
        
    
{/* 
<About/> 

  {/* <Route path="*" element={<notFound />} /> */}
   
  {/* <Detailes/>  */} 
  {/* <Search/> */}
  {/* <Notfound/> */}
  {/* <Profile/> */}


  
    </Layout>
    
    
  );
}

export default App;
