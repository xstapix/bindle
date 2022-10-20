import './Hotels.sass'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import DB from '../exampleHotels.json'
import SortSetting from '../components/SortSetting'
import FilterSetting from '../components/FilterSetting'

const Hotels = () => {
  const {localSearch} = useParams()
  const [sort, setSort] = useState(false)
  // const [DB, setDB] = useState()

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

  const handlerFavorite = () => {

  }

  const handleSort = () => {
    document.getElementById("sort").classList.toggle("S_Active")
  }
  
  const handlerFilter = () => {
    document.getElementById("filter").classList.toggle("S_Active")
  }

  return (
    <div className='hotels'>
      <div className='container'>
        <form className='hotels_search'>
          <img alt='search' src='../image/svg/search.svg'/>
          <input type='text' placeholder='Where are you going?' defaultValue={localSearch}/>
        </form>
        <div className='hotels_settings'>
          <img onClick={handleSort} className='setting' alt='sort' src='../image/svg/sort.svg'/>
          <img onClick={handlerFilter} className='setting filter' alt='filter' src='../image/svg/tune.svg'/>
        </div>
        <div className='hotels_list'> 
        {DB ? DB.data.body.searchResults.results.map((item) => (
          <section key={item.id}>
            <img onClick={handlerFavorite} id={item.id} className='favorite' alt='favorite' src='../image/svg/favorite_black_24dp.svg'/>
            <img className='plug_hotel singleItemInList' alt='hotel' src={item.thumbnailUrl}/>
            <div className='hotel_info'>
              <p className='hotel_rating'>
                <img className='start_rating' alt='star' src='../image/svg/Star 5.svg'/>
                {item.guestReviews.rating} ({item.guestReviews.total})
              </p>
              <h1 className='hotel_name'>{item.name}</h1>
              <p className='hotel_local'>{item.address.streetAddress} | {item.address.locality} </p>
              <div>
                <h1 className='hotel_prise'>{item.ratePlan.price.current} / night</h1>
                <button>Book Now</button>
              </div>
            </div>
          </section>
        )) : <>loading...</>}
        </div>
      </div>
      <SortSetting/>
      <FilterSetting/>
    </div>
  )
}

export {Hotels}