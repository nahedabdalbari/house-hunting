import React from 'react';
import {Layout, Landing} from '../Pages';
import {Route,Routes } from 'react-router-dom';
import About from '../Pages/About';
import Details from '../Pages/Detailes';
import SearchPage from '../Pages/SearchPage';
import NotFound from '../Pages/NotFound';
import Profile from '../Pages/Profile';
import Favorite from '../Pages/Profile/Favorite';
import { PrivateRoute, PublicRoute } from '../Components/Route';
import AuthProvider from '../Context/Authorization';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';




function App() {
  return (
    <ThemeProvider theme = {theme}>
​
    <AuthProvider>
    <Layout className="App">


<Routes>
     <Route path="/" element={<Landing/>}/>
    <Route path="/aboutus" element={<About />} />
       <Route path={`/detailes/:id`} element={<Details />} />
    <Route path="/SearchPage" element={<SearchPage />} />
    
    <Route path='/Profile' element={<Profile/>}/> 


     {/* <Route exact path='/login' element={<PublicRoute/>}>
         <Route exact path='/login' element={<Login/>}/>
         
         </Route>  */}

         {/* <Route exact path='/register' element={<PublicRoute/>}>
         <Route exact path='/register' element={<Register/>}/>
         </Route> */} 

         <Route exact path='/favorite' element={<PrivateRoute/>}>
         <Route exact path='/favorite' element={<Favorite/>}/>
         </Route>
         <Route path='*' element={<NotFound />}/> 

</Routes>

</Layout>

    </AuthProvider>
</ThemeProvider>
    
    
  );
}

export default App;
