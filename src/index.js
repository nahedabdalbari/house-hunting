import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Router>
      <App />
      {/* <Routes>
        <Route path="/" element={<Landing/>}>
          <Route path="/aboutus" element={<About />} />
        
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes> */}
    </Router> 

  
 
);

