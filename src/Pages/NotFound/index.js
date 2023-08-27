import * as React from 'react';
import './style.css'

export default function NotFound() {
  return(
    <div className='not'>
      <h2 style={{color:'red'}}>Uh_Oh....</h2>
      <h4>The page you are looking for my have been moved,deleted, or possibly never excited</h4>
      <h3 className='num'>404</h3>
    </div>

  );
}