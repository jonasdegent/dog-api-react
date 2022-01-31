/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import {firebase} from "./utils/firebase"
import {collection,getDocs,deleteDoc,doc} from "firebase/firestore"
import { Link } from 'react-router-dom';

const Favorites = () => {
  
  const [favorites, setFavorites] = useState([]);
  const favoritesCollectionRef = collection(firebase, "dog-favorites");

  const getFavorites = async () => {
    const data = await getDocs(favoritesCollectionRef);
    setFavorites(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  }

  const deleteFavorite = async (id) => {
    const favoriteDoc = doc(firebase, "dog-favorites", id);
    await deleteDoc(favoriteDoc)
    await getFavorites();
  }

  useEffect (() => { 
    getFavorites();
  },[])

  return (
    <div className="favorites-wrapper">
      <div className="favorites">
        {favorites.map((favorite) => {
          return (
            <div className="favorite-item">
              <p className="favorite-title">Favorite: {favorite.name}</p>
              <button onClick={() => {deleteFavorite(favorite.id)}} className="remove-button">REMOVE</button>
            </div>
          )
        })}
      </div>
      <Link to='/' className="link-reset">
        <button className="link-to-button">HOME</button>
      </Link>
    </div>
  )
}

export default Favorites
