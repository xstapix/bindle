import { useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'

import HotelsDesk from '../components/HotelsDesk'
import HotelsMobil from '../components/HotelsMobil'

import { useCheckDate } from '../hook/useCheckDate'

const Hotels = () => {
  const {localSearch} = useParams()
  const [initialDB, setInitialDB] = useState(null)
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

    setInitialDB(null)
    
    fetch('https://6392fd90ab513e12c5ff47f0.mockapi.io/location', options) // change on https://apidojo-booking-....
      .then(response => response.json())
      .then(response => {
        let localResult = []

        // for(const item of response){
        //   let dest_ids = item.dest_id 
        //   fetch(`https://apidojo-booking-v1.p.rapidapi.com/properties/list?offset=0&arrival_date=2022-12-14&departure_date=2022-12-19&guest_qty=1&dest_ids=${dest_ids}&room_qty=1&search_type=city&children_qty=2&children_age=5%2C7&search_id=none&price_filter_currencycode=USD&order_by=popularity&languagecode=en-us&travel_purpose=leisure`, options)
        //   .then(response => response.json())
        //     .then(response => {
        //       localResult = localResult.concat(response.result)
        //     })
        //     .catch(err => console.error(err));
        // };
        fetch(`https://6392fd90ab513e12c5ff47f0.mockapi.io/properties`)
          .then(response => response.json())
            .then(response => {
              setInitialDB(response);
            })
            .catch(err => console.error(err));

        // setTimeout(() => {
        //   setInitialDB(localResult);
        // }, 3000);
    })
    .catch(err => console.error(err));

    console.log('fetch');

  }, [localSearch])

  useEffect(() => {
    setHotelsList(initialDB)
  }, [initialDB])
  
  const handlerAppliedFilter = ({priceMin, priceMax, starList}) => {
    let collectedHotels = []
    const List = initialDB.filter(item => 
      (item.ratePlan.price.exactCurrent >= priceMin) & 
      (item.ratePlan.price.exactCurrent <= priceMax))
    
    setHotelsList(List)
    
    const searchStar = (key) => {
      if (key === 'five') {
        const newList = List.filter(item => item.starRating === 5)
        collectedHotels = collectedHotels.concat(newList)
      }
      if (key === 'four') {
        const newList = List.filter(item => item.starRating === 4)
        collectedHotels = collectedHotels.concat(newList)
      }
      if (key === 'three') {
        const newList = List.filter(item => item.starRating === 3)
        collectedHotels = collectedHotels.concat(newList)
      }
      if (key === 'two') {
        const newList = List.filter(item => item.starRating === 2)
        collectedHotels = collectedHotels.concat(newList)
      }
    }

    if (Object.values(starList).includes(true)) {
      for (const key in starList) {
        if(starList[key]) {
          searchStar(key)
        }
      }
      setHotelsList(collectedHotels)
    } 
  } 

  const handlerAppliedSort = (sortList) => {
    let newList

    for (const key in sortList) {
      if(sortList[key]) {
        switch (key) {
          case 'LH':
            newList = hotelsList.sort((a, b) => a.ratePlan.price.exactCurrent - b.ratePlan.price.exactCurrent)
            break;
          case 'HL':
            newList = hotelsList.sort((a, b) => b.ratePlan.price.exactCurrent - a.ratePlan.price.exactCurrent)
            break;
          case 'D':
            newList = hotelsList.sort((a, b) => b.starRating - a.starRating)
            break;
          case 'U':
            newList = hotelsList.sort((a, b) => a.starRating - b.starRating)
            break;
        
          default:
            break;
        }
      }
    }
    setHotelsList([...newList])
  }

  console.log('hotels Main');

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
    : <>
        <div className='hotels'>
          Loading...
        </div>
      </>
    }
    </>
  )
}

export {Hotels}