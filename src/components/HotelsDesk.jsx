import './HotelsDesk.sass'

import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useCheckDate } from '../hook/useCheckDate'
import { useGuest } from '../hook/useGuest'

import SortSetting from '../components/SortSetting'
import FilterSetting from '../components/FilterSetting'
import CalendarComponent from '../components/Calendar'
import Guest from '../components/Guest'

const HotelsDesk = ({propHandlerAppliedFilter, propHandlerAppliedSort, propHotelsList}) => {
	const {checkIn, checkOut} = useCheckDate() 
	const {adults} = useGuest() 
	const navigate = useNavigate()
  const {localSearch} = useParams()
  const [searchInput, setSearchInput] = useState(localSearch)

  const handlerSearch = () => {
    navigate(`/${searchInput}`)
  }

	let nights

	if (checkOut) {
		if (checkOut.split('/')[1] > checkIn.split('/')[1]) {
			nights = checkOut.split('/')[1] - checkIn.split('/')[1];
		} else {
			nights = checkIn.split('/')[1] - checkOut.split('/')[1];
		}
	}

	console.log('hotelsDesk');

  return (
    <div className='hotels'>
      <div className='container'>
        <div style={{display: 'flex'}}>
					<div>
						<div className='filterS' style={{padding: 20}}>
							<p className='propertisSearch'>Destination</p>
							<form className='hotels_search' style={{margin: '0 0 13px'}}>
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
								className='cursorP margin-24_0_0 lh-16 color-ffffff fz-13 BG-3A6AD5 br_radius-14 br_radius-284 br-none fw-Reg width-100 padding-15'>
									Search
							</button>
						</div>
						<FilterSetting hAppliedFilter={propHandlerAppliedFilter}/>
						<SortSetting hAppliedSort={propHandlerAppliedSort}/>
					</div>
					<div className='hotels_list'>
						<p className='direction'>Direction: {localSearch}</p>
						<p className='found'>Found {propHotelsList.length} hotels</p>
						{propHotelsList.length > 0 ? propHotelsList.map((item) => (
							<section key={item.hotel_id}>
								<Link style={{height: 220}} to={`/${localSearch}/${item.hotel_id}`} state={item}>
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
												<Link to={`/${localSearch}/${item.hotel_id}`} state={item}>
													<div className='show_now'>Show Now</div>
												</Link>
											</>
										: <div className='show_now' style={{margin: '121px 0 0'}}>Show Now</div>}
									</div>
								</div>
							</section>
						)) : <p className='NothingFound'>Nothing found</p>}
					</div>
				</div>
      </div>
    </div>
  )
}

export default HotelsDesk