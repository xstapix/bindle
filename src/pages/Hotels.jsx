import { useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'

import HotelsDesk from '../components/HotelsDesk'
import HotelsMobil from '../components/HotelsMobil'

import { useCheckDate } from '../hook/useCheckDate'

const Hotels = () => {
  const {localSearch} = useParams()
  const [initialDB, setInitialDB] = useState()
  const [hotelsList, setHotelsList] = useState(null)
	const {checkIn, checkOut} = useCheckDate() 
  
  const screenW = window.screen.width 
  
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '534f1377f4msha36408bd2db5f20p1a7ef7jsn6556c9dca6f8',
        'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
      }
    }

    let arrival_date
    let departure_date

    if (checkOut) {
      arrival_date = checkIn
      departure_date = checkOut
    } else {
      let newDate = new Date().toLocaleDateString()
      let day = newDate.split('.')[0]

      day =+ Number(day) + 1
      arrival_date = newDate.split('.')
      arrival_date[0] = day
      arrival_date = arrival_date.reverse().join('-')

      day =+ Number(day) + 2
      departure_date = newDate.split('.')
      departure_date[0] = day
      departure_date = departure_date.reverse().join('-')
      console.log(departure_date);
      console.log(arrival_date);
    }

    setInitialDB(null)

    fetch(`https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete?text=${localSearch}&languagecode=en-us`, options) // change on `https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete?text=${localSearch}&languagecode=en-us`
      .then(response => response.json())
      .then(response => {
        let localResult = []
        console.log(response);

        for(const item of response){
          setTimeout(() => {
            
            let dest_ids = item.dest_id 
            fetch(`https://apidojo-booking-v1.p.rapidapi.com/properties/list?offset=0&arrival_date=${arrival_date}&departure_date=${departure_date}&guest_qty=1&dest_ids=${dest_ids}&room_qty=1&search_type=city&children_qty=2&children_age=5%2C7&search_id=none&price_filter_currencycode=USD&order_by=popularity&languagecode=en-us&travel_purpose=leisure`, options)
            .then(response => response.json())
            .then(response => {
              localResult = localResult.concat(response.result)
              console.log(response);
            })
            .catch(err => console.error(err));
          }, 1000);
        };

        setTimeout(() => {
          setInitialDB(localResult)
          console.log(localResult);
        }, 5000);
    })
    .catch(err => console.error(err));

  }, [localSearch])

  useEffect(() => {
    setHotelsList(initialDB)
  }, [initialDB])
  
  const handlerAppliedFilter = ({priceMin, priceMax, starList}) => {
    let collectedHotels = []
    const List = initialDB.filter(item => 
      (item.price_breakdown.all_inclusive_price >= priceMin) & 
      (item.price_breakdown.all_inclusive_price <= priceMax))
    
    setHotelsList(List)
    
    // const searchStar = (key) => {
    //   if (key === 'five') {
    //     const newList = List.filter(item => item.starRating === 5)
    //     collectedHotels = collectedHotels.concat(newList)
    //   }
    //   if (key === 'four') {
    //     const newList = List.filter(item => item.starRating === 4)
    //     collectedHotels = collectedHotels.concat(newList)
    //   }
    //   if (key === 'three') {
    //     const newList = List.filter(item => item.starRating === 3)
    //     collectedHotels = collectedHotels.concat(newList)
    //   }
    //   if (key === 'two') {
    //     const newList = List.filter(item => item.starRating === 2)
    //     collectedHotels = collectedHotels.concat(newList)
    //   }
    // }

    // if (Object.values(starList).includes(true)) {
    //   for (const key in starList) {
    //     if(starList[key]) {
    //       searchStar(key)
    //     }
    //   }
    //   setHotelsList(collectedHotels)
    // } 
  } 

  const handlerAppliedSort = (sortList) => {
    let newList

    for (const key in sortList) {
      if(sortList[key]) {
        switch (key) {
          case 'LH':
            newList = hotelsList.sort((a, b) => a.price_breakdown.all_inclusive_price - b.price_breakdown.all_inclusive_price)
            break;
          case 'HL':
            newList = hotelsList.sort((a, b) => b.price_breakdown.all_inclusive_price - a.price_breakdown.all_inclusive_price)
            break;
          case 'D':
            newList = hotelsList.sort((a, b) => b.review_score - a.review_score)
            break;
          case 'U':
            newList = hotelsList.sort((a, b) => a.review_score - b.review_score)
            break;
        
          default:
            break;
        }
      }
    }
    setHotelsList([...newList])
  }

  document.title = `Bindle | Hotels in ${localSearch}`

  return (
    <>
    {hotelsList ?  <>
      {screenW > 428 ? 
        <HotelsDesk
          propHandlerAppliedFilter={handlerAppliedFilter}
          propHandlerAppliedSort={handlerAppliedSort}
          propHotelsList={hotelsList}/> : 
        <HotelsMobil 
          propHandlerAppliedFilter={handlerAppliedFilter}
          propHandlerAppliedSort={handlerAppliedSort}
          propHotelsList={hotelsList}/>
      } </> 
    : 
      <div className='loadingModal'>
        <div className='container'>
          <p className='logo_effect fw-Bold fz-27'>Looking for suitable hotels</p>
        </div>
      </div>
    }
    </>
  )
}

export {Hotels}