import './SingleHotel.sass'

import { useParams } from 'react-router-dom'

import HotelData from '../exampleSingleHotel.json'
import HotelPhoto from '../exampleSingleHotelPhoto.json'

const SingleHotel = () => {
	const {IDHotel} = useParams()

	document.title = `${HotelData.data.body.propertyDescription.name}`

	const handleAtAGlance = (e) => {
		if (e.target.id === 'moreOrder') {
			document.getElementById('moreOrderImg').classList.toggle('moreGlance')
			document.getElementById('dropOrder').classList.toggle('activeAtAGlance')
		} else {
			document.getElementById('moreCheckImg').classList.toggle('moreGlance')
			document.getElementById('dropCheck').classList.toggle('activeAtAGlance')
		}
	}

	const handleSeeAll = () => {
		document.getElementById('amenitiesPopUp').classList.toggle('activeAmenitiesPopUp')
		document.body.style.overflow = 'hidden'
	}

	const handleCloseSeeAll = () => {
		document.getElementById('amenitiesPopUp').classList.toggle('activeAmenitiesPopUp')
		document.body.style.overflow = 'visible'
	}

	return (
		<div>
			<img className='favoriteHotel' alt='favorite' src='../image/svg/favorite_black_24dp.svg'/>
			<img className='singleHotelPhoto' alt='hotelPhoto' src='../image/hotel.png'/>
			{HotelData ?
			<div key={HotelData.data.body.pdpHeader.hotelId}>
				<div className='containerMargin'>
					<h1 className='hotel_name'>{HotelData.data.body.propertyDescription.name}</h1>
					<div className='DF_JS_AC'>
						<p className='hotel_local margin10'>{HotelData.data.body.propertyDescription.address.addressLine1} | {HotelData.data.body.propertyDescription.address.cityName}</p>
						<p className='hotel_rating margin10'>
							<img className='start_rating ' alt='star' src='../image/svg/Star 5.svg'/>
							{HotelData.data.body.propertyDescription.starRating} ({HotelData.data.body.guestReviews.brands.total})
						</p>
					</div>
					<div className='footer_line margin24'></div>
				</div>
				<div className='hotelAmenities'>
					<div className='DF_JS_AC marginBoby'>
						<p className='hotel_name'>Amenities</p>
						<p onClick={handleSeeAll} className='seeAllAmenities'>See All</p>
					</div>
					<div className='amenityBody'>
					{HotelData.data.body.overview.overviewSections[0].content.map(item => (
						<p className='amenity' key={item}>
							{item}
						</p>
					))}
					</div>
				</div>
				<div className='containerMargin'>
					<p className='hotel_name'>For families</p>
					{HotelData.data.body.overview.overviewSections[1].content.map(item => (
					<p className='amenity' key={item}>
						{item}
					</p>
					))}
				</div>
				<div className='containerMargin'>
					<p className='hotel_name whatAroundMargin'>What’s around</p>
					{HotelData.data.body.overview.overviewSections[2].content.map(item => (
					<p className='whatAround' key={item}>
						{item}
					</p>
					))}
				</div>
				<div className='containerMargin'>
				{HotelData.data.body.roomsAndRates.rooms.map(item => (
					<div className="hotelRoom" key={item.name}>
						<p className='room_name'>{item.name}</p>
						<p className='room_info'>Occupancy: <span>{item.maxOccupancy.total}</span></p>
						<p className='room_info margin-0_0_7'>Bed Choices:
						{item.bedChoices.mainOptions.map(bed => (
							<span key={bed}> {bed}</span>
						))}
						</p>
						{item.additionalInfo.details.amenities.slice(0, 5).map(amenit => (
							<p className='room_amenit' key={amenit}>{amenit}</p>
						))}
						<button className='roomBookNow'>Book Now</button>
					</div>
				))}
				</div>
				<div className='containerMargin'>
					<div className='atAGlance '>
						<div onClick={handleAtAGlance} id='moreOrder' className="DF_JS_AC">
							<p>Order of residence</p>
							<img id='moreOrderImg' alt='more' src='../image/svg/more.svg'/>
						</div>
						<div id="dropOrder" className='dropDown'>
						{HotelData.data.body.atAGlance.keyFacts.requiredAtCheckIn.map(check => (
							<p key={check}>{check}</p>
						))}
						{HotelData.data.body.atAGlance.travellingOrInternet.travelling.pets.map(check => (
							<p key={check}>{check}</p>
						))}
						</div>
					</div>
					<div className='atAGlance '>
						<div onClick={handleAtAGlance} id='moreCheck' className="DF_JS_AC">
							<p>Required at check in</p>
							<img id='moreCheckImg' alt='more' src='../image/svg/more.svg'/>
						</div>
						<div id="dropCheck" className='dropDown'>
							{HotelData.data.body.atAGlance.keyFacts.arrivingLeaving.map(check => (
								<p key={check}>{check}</p>
							))}
						</div>
					</div>
				</div>
				<div id='amenitiesPopUp' className="amenitiesPopUp">
					<div className="amenitiesHeader">
						<div onClick={handleCloseSeeAll} className="arrowLeft rotate90">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 15.3748L6 9.3748L7.075 8.2998L12 13.2498L16.925 8.3248L18 9.3998L12 15.3748Z" fill="#fff"/>
							</svg>
						</div>
						<p className='Amenities_name'>Amenities</p>
					</div>
					<div className="Amenities_body">
					{HotelData.data.body.amenities.map(item => (
						item.listItems.map(category => (
							<div key={category.heading}>
								<p className='categoryText'>{category.heading}</p>
								{category.listItems.map(amenity => (
									<p className='amenity' key={amenity}>{amenity}</p>	
								))}
							</div>
						))
					))}
					</div>
				</div>
			</div> : <>Loading...</>}
		</div>
	)
}

export {SingleHotel}