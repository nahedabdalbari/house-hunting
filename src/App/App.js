import React from 'react';
import {Layout, Landing} from '../Pages';
 import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
  // import About from '../Pages/About';
  // import Search from '../Pages/Search';
  import Detailes from '../Pages/Detailes';

function App() {
  return (
    <Layout className="App">

{/* <Router>
      <Routes>
        <Route path="/" element={<Landing/>}>
          <Route path="/aboutus" element={<About />} />
        
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router> */}
  {/* <About/> */}
  {/* <Search/> */}
  <Detailes/>


  
    </Layout>
    
    
  );
}

export default App;
