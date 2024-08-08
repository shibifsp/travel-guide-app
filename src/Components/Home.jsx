import React,{ useState, useEffect } from 'react'
import { ReactComponent as Logo } from '../Assets/images/logo.svg';
import Point from '../Assets/images/place.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [places,setPlaces] = useState([]);
 

  useEffect( () => {
    axios.get("https://traveller.talrop.works/api/v1/places/")
    .then((response) => {
      setPlaces(response.data.data)
    })
    .catch((error) => {
      console.error("Error fetching places:", error);
    });

  }, [])

  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className="nav">
        <Logo/>
        <button className='login'>Login</button>
      </div>
      <h2 className='welcome'>Welcome</h2>
      <p className="explore">Explore the world around you</p>
      <div className="places">
        {places.map((place) => (
          <div key={place.id} className="place" onClick={() => navigate('/Item')}>
            <img className='imgT-list' src={place.image} alt="img" />
            <h1>{place.name}</h1>
            <div className="location">
              <img src={Point} alt="point-Img" />
              <h2>{place.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
