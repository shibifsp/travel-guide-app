import React,{ useState, useEffect } from 'react'
import Point from '../Assets/images/place.svg';
import axios from 'axios';

export default function Item() {

  const [placePage, setPlacePage] = useState([]);

  useEffect(() => {
    axios.get("https://traveller.talrop.works/api/v1/places/categories/").then((res) =>{
      console.log(res.data.data);
      setPlacePage(res.data.data);
    })
  },[])

  return (
    <div>
      {placePage.map((view) => (
      <div className="aPage" key={view.id}>
        <h1>{view.name}</h1>
        <div className="destination">
          <h1>{view.name}</h1>
          <div className="location">
            <img src={Point} alt="point-Img" />
            <h2>{view.name}</h2>
          </div>
          <div className="img-container">
            <div className="left">
              <img src={view.image} alt="IMG-viewM" />
            </div>
            <div className="right">
              <img src="" alt="" />
            </div>
          </div>
          <div className="bottom">
            <h2>Place Details</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolore neque ad nihil, doloremque obcaecati debitis blanditiis reiciendis illo adipisci, fuga earum magni? Ipsam repudiandae iure sed? Reiciendis, atque eum.</p>
          </div>
        </div>
      </div>
    ))}
    </div>
  )
}
