import React from 'react';
import {Layout, Landing} from '../Pages';
import {Route,Routes } from 'react-router-dom';
  import About from '../Pages/About';
  import Search from '../Pages/Search';
  import Details from '../Pages/Detailes';

function App() {
  return (
    <Layout className="App">


      <Routes>
           <Route path="/" element={<Landing/>}/>
          <Route path="/aboutus" element={<About />} />
             <Route path={`/detailes/:id`} element={<Details />} />
          {/* <Route path="/detailes" element={<Details />} /> */}
          <Route path="/Search" element={<Search />} />
          
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>

{/* <About/> 
   <Search/>
  <Detailes/>  */}


  
    </Layout>
    
    
  );
}

export default App;
