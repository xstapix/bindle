import './HotelsDesk.sass'

import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

import SortSetting from '../components/SortSetting'
import FilterSetting from '../components/FilterSetting'
import CalendarComponent from '../components/Calendar'
import Guest from '../components/Guest'

const HotelsDesk = ({propHandlerAppliedFilter, propHandlerAppliedSort, propHotelsList}) => {

	const navigate = useNavigate()
  const {localSearch} = useParams()
  const [searchInput, setSearchInput] = useState(localSearch)

  const handlerSearch = () => {
    navigate(`/${searchInput}`)
  }

  return (
    <div className='hotels'>
      <div className='container'>
        <div style={{display: 'flex'}}>
					<div>filter</div>
					<div className='hotels_list'>
						<p className='direction'>Direction: Florida</p>
						<p className='found'>Found 6,637 hotels</p>
					{propHotelsList ? propHotelsList.map((item) => (
						<Link to={`/${localSearch}/${item.id}`}>
							<section key={item.id}>
									<img className='desk_plug_hotel singleItemInList' alt='hotel' src={item.thumbnailUrl}/>
									<div className='hotel_info w-100'>
										<h1 className='desk_hotel_name'>{item.name}</h1>
										<p className='desk_hotel_local'>{item.address.streetAddress} | {item.address.locality} </p>
										<p className='desk_hotel_local color-red'>1 left on our app</p>
									</div>
									<div className="hotel_info">
										<p className='desk_hotel_rating'>
											<img className='start_rating' alt='star' src='../image/svg/Star 5.svg'/>
											{item.starRating} ({item.guestReviews.total})
										</p>
										<p className='nights'>6 nights, 2 adults</p>
										<p className='total_prise'>$ 3,848</p>
										<div className='show_now'>Show Now</div>
									</div>
							</section>
						</Link>
					)) : <p className='NothingFound'>Nothing found</p>}
					</div>
				</div>
      </div>
    </div>
  )
}

export default HotelsDesk