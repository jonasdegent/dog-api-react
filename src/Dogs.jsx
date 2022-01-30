import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./css/styles.css"
import { Link } from 'react-router-dom';
// import { getValue } from '@testing-library/user-event/dist/utils';

const Dogs = () => {
  const [dogs, setDogs] = useState([]);
  
  useEffect(() => { 
    fetchDogs();
  }, []);

const fetchDogs = () => {
  axios
    .get('https://api.thedogapi.com/v1/breeds')
    .then((res) => {
      setDogs(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const [searchDog, setSearchDog] = useState("");

return (
    <div>
      <div className="header-dogs">
        <h1 className="header-dogs-title">Who let the dogs out!</h1>
        <input type="text" placeholder="Search for any dog" onChange={(e) => 
          {setSearchDog(e.target.value)}
          } />
        <Link to='/favorites'><button className="link-to-button">FAVORITES</button></Link>
      </div>
      <div className="item-container">
      {dogs.filter((dog) => {
          if (searchDog ==="") {
            return dog
          } else if (dog.name.toLowerCase().includes(searchDog.toLowerCase())) {
            return dog
          } else {
            return null
          }
        }).map((dog) => (
          <div className="card" key={dog.id}>
            <Link to={`/dog/${dog.name}`}><img src={dog.image.url} alt={`a dog named ${dog.name}`} /></Link>
            <h3>{dog.name}</h3>
            <Link className="link-reset" to={`/dog/${dog.name}`}><span className="link-to-details">DETAILS</span></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dogs;