import { useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'

import HotelsDesk from '../components/HotelsDesk'
import HotelsMobil from '../components/HotelsMobil'

import DB from '../exampleHotels.json'

const Hotels = () => {
  const {localSearch} = useParams()
  const initialDB = DB.data.body.searchResults.results
  const [hotelsList, setHotelsList] = useState(initialDB)
  
  const screenW = window.screen.width

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
      {screenW > 428 ? 
        <HotelsDesk
          propHandlerAppliedFilter={handlerAppliedFilter}
          propHandlerAppliedSort={handlerAppliedSort}
          propHotelsList={hotelsList}/> : 
        <HotelsMobil 
          propHandlerAppliedFilter={handlerAppliedFilter}
          propHandlerAppliedSort={handlerAppliedSort}
          propHotelsList={hotelsList}/>
      }
    </>
  )
}

export {Hotels}