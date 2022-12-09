import { getDatabase, ref, onValue } from "firebase/database";

import { Link } from 'react-router-dom'
import {useAuth} from '../hook/useAuth'
import { useCheckDate } from "../hook/useCheckDate";
import { useGuest } from "../hook/useGuest";

import './Favorites.sass'
import DB from '../exampleHotels.json'
import { useState, useEffect } from "react";

const Favorites = () => {
  const {checkIn, checkOut} = useCheckDate() 
	const {adults, children} = useGuest() 
  const initialDB = DB.data.body.searchResults.results
  const [favoriteList, setFavoriteList] = useState()
	const {id} = useAuth()
  let data = null
  let nights
 
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

	if (checkOut) {
		if (checkOut.split('/')[1] > checkIn.split('/')[1]) {
			nights = checkOut.split('/')[1] - checkIn.split('/')[1];
		} else {
			nights = checkIn.split('/')[1] - checkOut.split('/')[1];
		}
	}

  return (
    <div className='hotels'>
      <div className='container'>
        {favoriteList ? 
        <>
          <p className='color-304659 fw-Bold fz-19 DI-B fw-Reg'>My favorite hotels</p> 
          <span className='fz-17 color-696F8C margin-0_0_0_10'>{favoriteList.length}</span>
          <div className="hotels_list margin-40px_0_0">
            {window.screen.width > 428 ? 
              <>
              {favoriteList.map((item) => (
              <Link to={`/${item.address.locality}/${item.id}`} key={item.id} state={Math.round(nights * item.ratePlan.price.exactCurrent)}>
								<section key={item.id}>
										<img className='desk_plug_hotel singleItemInList' alt='hotel' src={item.thumbnailUrl}/>
										<div className='hotel_info w-100'>
											<h1 className='desk_hotel_name'>{item.name}</h1>
											<p className='desk_hotel_local'>{item.address.streetAddress} | {item.address.locality} </p>
										</div>
										<div className="hotel_info">
										<div style={{width: 130}}>
											<p className='desk_hotel_rating'>
												<img className='start_rating' alt='star' src='../image/svg/Star 5.svg'/>
												{item.guestReviews.unformattedRating} ({item.guestReviews.total})
											</p>
											{item.guestReviews.badgeText ?
												<div className="DeskGood">
													<p>{item.guestReviews.badgeText}</p>
												</div> : <></>
											}
											{checkOut ? 
												<>
													<p className='nights'>{nights} nights, {adults} adults</p>
													<p className='total_prise'>$ {Math.round(nights * item.ratePlan.price.exactCurrent)}</p> 
													<div className='show_now'>Show Now</div>
												</>
											: <div className='show_now' style={{margin: '121px 0 0'}}>Show Now</div>}
										</div>
									</div>
								</section>
							</Link>
              ))}
              </>
            : 
            <>
              {favoriteList.map((item) => (
              <Link to={`/${item.address.locality}/${item.id}`} key={item.id}>
                <section> 
                <svg className='favorite hotel_liked'xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff">
                  <path d="M0 0h24v24H0V0z" fill="none"/>
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                  <img className='plug_hotel singleItemInList' alt='hotel' src={item.thumbnailUrl}/>
                  <div className='hotel_info'>
                    <p className='hotel_rating'>
                      <img className='start_rating' alt='star' src='../image/svg/Star 5.svg'/>
                      {item.starRating} ({item.guestReviews.total})
                    </p>
                    <h1 className='hotel_name'>{item.name}</h1>
                    <div className="DF_JE">
                      <p className='hotel_local'>{item.address.locality} </p>
                      <h1 className='hotel_price'>{item.ratePlan.price.current} / night</h1>
                    </div>
                  </div>
                </section>
              </Link>))}
            </>
            }
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