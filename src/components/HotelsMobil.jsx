import './HotelsMobil.sass'

import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

import SortSetting from '../components/SortSetting'
import FilterSetting from '../components/FilterSetting'
import CalendarComponent from '../components/Calendar'
import Guest from '../components/Guest'

const HotelsMobil = ({propHandlerAppliedFilter, propHandlerAppliedSort, propHotelsList}) => {

	const navigate = useNavigate()
  const {localSearch} = useParams()
  const [searchInput, setSearchInput] = useState(localSearch)

  const handlerSearch = () => {
    navigate(`/${searchInput}`)
  }

  return (
    <div className='hotels'>
      <div className='container'>
        <form className='hotels_search'>
          <img alt='search' src='../image/svg/search.svg'/>
          <input 
            className='w-100 color-304659'
            onChange={(e) => setSearchInput(e.target.value)} 
            type='text' 
            placeholder='Where are you going?' 
            defaultValue={searchInput}/>
        </form>
        <CalendarComponent/>
        <Guest/>
        <button 
          onClick={handlerSearch}
          className='margin-24_0_0 lh-16 color-ffffff fz-13 BG-3A6AD5 br_radius-14 br_radius-284 br-none fw-Reg width-100 padding-15'>
            Search
        </button>
        <div className='hotels_settings'>
          <SortSetting 
            hAppliedSort={propHandlerAppliedSort}/>
          <FilterSetting 
            hAppliedFilter={propHandlerAppliedFilter}/>
        </div>
        <div className='hotels_list'> 
        {propHotelsList ? propHotelsList.map((item) => (
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

export default HotelsMobil