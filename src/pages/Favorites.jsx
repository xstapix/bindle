import { getDatabase, ref, onValue } from "firebase/database";

import { Link } from 'react-router-dom'
import {useAuth} from '../hook/useAuth'

import './Favorites.sass'
import DB from '../exampleHotels.json'
import { useState, useEffect } from "react";

const Favorites = () => {
  const initialDB = DB.data.body.searchResults.results
  const [favoriteList, setFavoriteList] = useState()
	const {id} = useAuth()
  let data = null
 
  const db = getDatabase();
  const starCountRef = ref(db, 'users/' + id);

  useEffect(() => {
    onValue(starCountRef, (snapshot) => { 
      if (snapshot.exists()) {
        data = snapshot.val();
        let newList = []
        data.favorites.forEach(id => {
          initialDB.forEach(item => {
            if (item.id == id) {
              newList.push(item)
            }
          })
        })
        setFavoriteList(newList)
      }
    });
  },[])


  return (
    <div className='hotels'>
      <div className='container'>
        {favoriteList ? 
        <>
          <p className='color-304659 fw-Bold fz-19 DI-B fw-Reg'>My favorite hotels</p> 
          <span className='fz-17 color-696F8C margin-0_0_0_10'>{favoriteList.length}</span>
          <div className="hotels_list margin-40px_0_0">
            {favoriteList.map((item) => (
            <Link to={`/${item.address.locality}/${item.id}`} key={item.id}>
              <section> 
                <img className='plug_hotel singleItemInList' alt='hotel' src={item.thumbnailUrl}/>
                <div className='hotel_info'>
                  <p className='hotel_rating'>
                    <img className='start_rating' alt='star' src='../image/svg/Star 5.svg'/>
                    {item.starRating} ({item.guestReviews.total})
                  </p>
                  <h1 className='hotel_name'>{item.name}</h1>
                  <div className='DF_JA_AC'>
                    <p className='hotel_local'>{item.address.streetAddress} | {item.address.locality} </p>
                    <h1 className='hotel_price'>{item.ratePlan.price.current} / night</h1>
                  </div>
                </div>
              </section>
            </Link>))}
          </div>
        </> : 
        <p className='color-304659 fw-Bold fz-19 DI-B fw-Reg'>
          This page will display your favorite hotels
        </p>
        }
      </div>
    </div>
  )
}
          

export {Favorites}