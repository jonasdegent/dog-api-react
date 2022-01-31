import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import "./css/styles.css"
import {collection, addDoc} from 'firebase/firestore'
import {firebase} from "./utils/firebase"

const Dog = () => {
  const [data, setData] = useState([]);
  let {name} = useParams();
  const favoritesCollectionRef = collection(firebase, "dog-favorites");

  const addToFavorites = async () => {
    await addDoc (favoritesCollectionRef, {name: name })
  }

useEffect(() => {
  const fetchDog = () => {
    axios
      .get(
        `https://api.thedogapi.com/v1/breeds/search?q=${name}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };  
  fetchDog();
}, [name]);

  return (
    <div className="dog-main">
      <div className="header-dog">
        <Link to='/' className="link-reset">
            <button className="link-to-button">HOME</button>
        </Link>
      </div>
      
      {data.map((dog) => {

        return (
          <div className="dog-wrapper" key={dog.id}>
            <div>
              <img className='dog-image' src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} alt={`a dog named ${dog.name}`} />
            </div>
            <div className="dog-item">
              <span className='dog-name'>{dog.name} </span>
              <p>
                <strong>Origin:</strong> {dog.origin ? "" : "Unknown" } {dog.origin}
              </p>
              <p>
                <strong>Bred for:</strong> {dog.bred_for}
              </p>
              <p>
                <strong>Temperament:</strong> {dog.temperament}
              </p>
              <p>
                <strong>Life-span: </strong>{dog.life_span}
              </p>
              <p>
                <strong>Weight: </strong>{dog.weight.imperial} kg
              </p>
              <p>
                <strong>Height: </strong>{dog.height.imperial} cm
              </p>
            </div>
            <button onClick={addToFavorites} className="add-to">ADD TO FAVORITES</button>
          </div>
        );
      })}
    </div>
  )
};
  export default Dog;