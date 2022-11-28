import './HotelsDesk.sass'

import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useCheckDate } from '../hook/useCheckDate'

import SortSetting from '../components/SortSetting'
import FilterSetting from '../components/FilterSetting'
import CalendarComponent from '../components/Calendar'
import Guest from '../components/Guest'

const HotelsDesk = ({propHandlerAppliedFilter, propHandlerAppliedSort, propHotelsList}) => {
	const {checkIn, checkOut} = useCheckDate() 
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
						{propHotelsList ? propHotelsList.map((item) => (
							<Link to={`/${localSearch}/${item.id}`}>
								<section key={item.id}>
										<img className='desk_plug_hotel singleItemInList' alt='hotel' src={item.thumbnailUrl}/>
										<div className='hotel_info w-100'>
											<h1 className='desk_hotel_name'>{item.name}</h1>
											<p className='desk_hotel_local'>{item.address.streetAddress} | {item.address.locality} </p>
										</div>
										<div className="hotel_info">
											<p className='desk_hotel_rating'>
												<img className='start_rating' alt='star' src='../image/svg/Star 5.svg'/>
												{item.guestReviews.unformattedRating} ({item.guestReviews.total})
											</p>
											{item.guestReviews.badgeText ?
												<div className="DeskGood">
													<p>{item.guestReviews.badgeText}</p>
												</div> : <></>
											}
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