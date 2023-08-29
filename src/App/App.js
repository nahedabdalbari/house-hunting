import React from 'react';
import {Layout, Landing} from '../Pages';
import {Route,Routes } from 'react-router-dom';
import About from '../Pages/About';
import Details from '../Pages/Detailes';
import SearchPage from '../Pages/SearchPage';
import NotFound from '../Pages/NotFound';
import Profile from '../Pages/Profile';




function App() {
  return (
    <Layout className="App">


      <Routes>
           <Route path="/" element={<Landing/>}/>
          <Route path="/aboutus" element={<About />} />
             <Route path={`/detailes/:id`} element={<Details />} />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path='*' element={<NotFound />}/> 
          <Route path='/Profile' element={<Profile/>}/> 

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
