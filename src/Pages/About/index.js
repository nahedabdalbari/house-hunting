
import React from 'react';

const centerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'calc(100vh - 100px)', // احتساب الارتفاع بالنسبة للشاشة
};

function About() {
  return (
    <div style={centerStyle}>
      <div>
        <h1>About Us</h1>
        <p>
          Welcome to our real estate website! Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7g3s7D0eFm0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>
          Additional information about our real estate services and team.
        </p>
      </div>
    </div>
  );
}

export default About;




