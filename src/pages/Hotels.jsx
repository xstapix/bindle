import './Hotels.sass'

import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'

import DB from '../exampleHotels.json'
import SortSetting from '../components/SortSetting'
import FilterSetting from '../components/FilterSetting'
import CalendarComponent from '../components/Calendar'
import Guest from '../components/Guest'


const Hotels = () => {
  const {localSearch} = useParams()
  const initialDB = DB.data.body.searchResults.results
  const [hotelsList, setHotelsList] = useState(initialDB)
  const [searchInput, setSearchInput] = useState(localSearch)

  
  document.title = `Bindle | Hotels in ${localSearch}`

  // const [DB, setDB] = useState()
  
  // if(!DB) return <>Loading...</>

  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '534f1377f4msha36408bd2db5f20p1a7ef7jsn6556c9dca6f8',
  //       'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
  //     }
  //   };
    
  //   let destinationId
    
  //   fetch('https://hotels4.p.rapidapi.com/locations/v2/search?query=new%20york&locale=en_US&currency=USD', options)
  //     .then(response => response.json())
  //     .then(response => {
  //       destinationId = response.suggestions[0].entities[0].destinationId
  //       fetch(`https://hotels4.p.rapidapi.com/properties/list?destinationId=${destinationId}&pageNumber=1&pageSize=25&checkIn=2022-05-05&checkOut=2022-05-10&adults1=1&sortOrder=PRICE&locale=en_US&currency=USD`, options)
  //         .then(response => response.json())
  //         .then(response => setDB(response.data.body.searchResults.results))
  //         .catch(err => console.error(err))})
  //     .catch(err => console.error(err));
    
  // }, [])

  // setTimeout(() => {
  //   DB.map(item => {
  //     console.log(item.id);
  //     console.log(item.guestReviews.rating);
  //   })
  // }, 3000);
  
  const handlerAppliedFilter = ({priceMin, priceMax, starList}) => {
    let collectedHotels = []
    const List = initialDB.filter(item => 
      (item.ratePlan.price.exactCurrent >= priceMin) & 
      (item.ratePlan.price.exactCurrent <= priceMax))
    
    // setHotelsList(newList)
    
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
    } else setHotelsList(List)

  } 

  const handlerAppliedSort = () => {

  }

  return (
    <div className='hotels'>
      <div className='container'>
        <form className='hotels_search'>
          <img alt='search' src='../image/svg/search.svg'/>
          <input 
          className='color-304659'
            onChange={(e) => setSearchInput(e.target.value)} 
            type='text' 
            placeholder='Where are you going?' 
            defaultValue={searchInput}/>
        </form>
        <CalendarComponent/>
        <Guest/>
        <div className='hotels_settings'>
          <SortSetting hAppliedSort={handlerAppliedSort}/>
          <FilterSetting 
            hAppliedFilter={handlerAppliedFilter}/>
        </div>
        <div className='hotels_list'> 
        {hotelsList.length ? hotelsList.map((item) => (
          <Link to={`/${localSearch}/${item.id}`}>
            <section key={item.id}>
              <img className='plug_hotel singleItemInList' alt='hotel' src={item.thumbnailUrl}/>
              <div className='hotel_info'>
                <p className='hotel_rating'>
                  <img className='start_rating' alt='star' src='../image/svg/Star 5.svg'/>
                  {item.starRating} ({item.guestReviews.total})
                </p>
                <h1 className='hotel_name'>{item.name}</h1>
                <p className='hotel_local'>{item.address.streetAddress} | {item.address.locality} </p>
                <div className='hotel_booking'>
                  <h1 className='hotel_price'>{item.ratePlan.price.current} / night</h1>
                  <button className='bookNow'>Show Now</button>
                </div>
              </div>
            </section>
          </Link>
        )) : <p className='NothingFound'>Nothing found</p>}
        </div>
      </div>
    </div>
  )
}

export {Hotels}