import { getDatabase, ref, onValue } from "firebase/database";

import { Link } from 'react-router-dom'
import {useAuth} from '../hook/useAuth'
import { useCheckDate } from "../hook/useCheckDate";
import { useGuest } from "../hook/useGuest";

import './Favorites.sass'
import { useState, useEffect } from "react";
import '../components/HotelsDesk.sass'

const Favorites = () => {
  const {checkIn, checkOut} = useCheckDate() 
	const {adults, children} = useGuest()
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
        setFavoriteList(data.favorites)
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
              <section key={item.hotel_id}>
                <Link style={{height: 220}} to={`/${item.city_trans}/${item.hotel_id}`} state={item}>
                  <img className='desk_plug_hotel singleItemInList' alt='hotel' src={item.main_photo_url.replace('/square60/', '/square300/')}/>
                </Link>
                <div className='hotel_info w-100'>
                  <h1 className='desk_hotel_name'>{item.hotel_name}</h1>
                  <p className='desk_hotel_local'>{item.address} | {item.city_trans} </p>
                </div>
                <div className="hotel_info">
                  <div style={{width: 130}}>
                    <p className='desk_hotel_rating'>
                      <img className='start_rating' alt='star' src='../image/svg/Star 5.svg'/>
                      {item.review_score} ({item.review_nr})
                    </p>
                    {item.review_score_word ?
                      <div className="DeskGood">
                        <p>{item.review_score_word}</p>
                      </div> : <></>
                    }
                    {checkOut ? 
                      <>
                        <p className='nights'>{nights} nights, {adults} adults</p>
                        <p className='total_prise'>$ {item.price_breakdown.all_inclusive_price}</p> 
                        <Link to={`/${item.city_trans}/${item.hotel_id}`} state={item}>
                          <div className='show_now cursorP'>Show Now</div>
                        </Link>
                      </>
                    : <div className='show_now cursorP' style={{margin: '121px 0 0'}}>Show Now</div>}
                  </div>
                </div>
              </section>
              ))}
              </>
            : 
            <>
              {favoriteList.map((item) => (
              <section key={item.hotel_id}>
                <Link style={{height: 220}} to={`/${item.city_trans}/${item.hotel_id}`} state={item}>
                  <img className='desk_plug_hotel singleItemInList' alt='hotel' src={item.main_photo_url.replace('/square60/', '/square300/')}/>
                </Link>
                <div className='hotel_info w-100'>
                  <h1 className='desk_hotel_name'>{item.hotel_name}</h1>
                  <p className='desk_hotel_local'>{item.address} | {item.city_trans} </p>
                </div>
                {/* <div className="hotel_info">
                  <div style={{width: 130}}>
                    <p className='desk_hotel_rating'>
                      <img className='start_rating' alt='star' src='../image/svg/Star 5.svg'/>
                      {item.review_score} ({item.review_nr})
                    </p>
                    {item.review_score_word ?
                      <div className="DeskGood">
                        <p>{item.review_score_word}</p>
                      </div> : <></>
                    }
                    {checkOut ? 
                      <>
                        <p className='nights'>{nights} nights, {adults} adults</p>
                        <p className='total_prise'>{item.price_breakdown.currency} {item.price_breakdown.all_inclusive_price}</p> 
                        <Link to={`/${item.city_trans}/${item.hotel_id}`} state={item}>
                          <div className='show_now cursorP'>Show Now</div>
                        </Link>
                      </>
                    : <div className='show_now cursorP' style={{margin: '121px 0 0'}}>Show Now</div>}
                  </div>
                </div> */}
              </section>
              ))}
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