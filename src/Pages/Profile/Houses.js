import React, { useEffect, useState } from 'react';
function HouseInfo() {
    const [housesData, setHousesData] = useState([]);
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/nahedabdalbari/mock-api/house')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setHousesData(data);
                }
            })
            .catch(error => {
                console.error('Error fetching houses data:', error);
            });
    }, []);
    return (
        <div className="container">
            {housesData.map((house, index) => (
                <div key={index} className="house-card">
                    {/* <div className="house-content">
                        <img src={house.url} alt="house" />
                        <div className="house-info">
                             <table>
                                <tr>
                                    <td><span> Address: </span></td>
                                    <td><span> {house.address} </span></td>
                                </tr>
                                <tr>
                                    <td><span> Price: </span></td>
                                    <td><span> {house.price} </span></td>
                                </tr>
                                <tr>
                                    <td><span> Description: </span></td>
                                    <td><span> {house.description.split("").splice(0, 115).join("")} </span></td>
                                </tr>
                                <tr>
                                    <td><span> Bedroom: </span></td>
                                    <td><span> {house.bedroom} </span></td>
                                    <td><span> Bathroom: </span></td>
                                    <td><span> {house.bathroom} </span></td>
                                </tr>
                                <tr>
                                    <td><span> Type: </span></td>
                                    <td><span> {house.type} </span></td>
                                </tr>
                             </table>
                            </div>
                        </div> */}
                        <div className='img-card'>
                        <img src={house.photo} alt="house"/> 
                        </div>
                        <div className='house-info'>
                          <div className='house-title'>
                          {house.title}
                          </div>
                          <div className='house-type'>
                          {house.type}
                          </div>
                          <div className='house-price'>
                          {house.price}
                          </div>
                          
                          
                        </div>
                    </div>
            ))}
        </div>
    );
}
export default HouseInfo;