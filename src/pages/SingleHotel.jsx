import './SingleHotel.sass'
import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom'

import { getDatabase, ref, set, onValue } from "firebase/database";
import Carousel from '../components/Carousel';
import CalendarComponent from '../components/Calendar'
import Guest from '../components/Guest'

import HotelData from '../exampleSingleHotel.json'
import {useAuth} from '../hook/useAuth'
import { useGuest } from '../hook/useGuest'
import { useCheckDate } from '../hook/useCheckDate';
import Link from 'react-scroll/modules/components/Link';

const SingleHotel = () => {
	const {IDHotel} = useParams()
	const locationData = useLocation()
	const {id, isAuth} = useAuth()
	const {checkIn, checkOut} = useCheckDate() 
	const {adults} = useGuest() 
	const navigate = useNavigate()
	const [hotelLiked, setHotelLiked] = useState('')
	const [photos, setPhotos] = useState(null)

	const db = getDatabase();
	const starCountRef = ref(db, 'users/' + id);
	const [data, setData] = useState(null)

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '534f1377f4msha36408bd2db5f20p1a7ef7jsn6556c9dca6f8',
				'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
			}
		};

		if (isAuth) {
			onValue(ref(db, 'users/' + id), (snapshot) => {
				if (snapshot.exists()) {
					setData(snapshot.val());
				}
			});
		}

		fetch(`https://apidojo-booking-v1.p.rapidapi.com/properties/get-hotel-photos?hotel_ids=${IDHotel}&languagecode=en-us`, options)
			.then(response => response.json())
			.then(response => setPhotos(response))
			.catch(err => console.error(err));

		// fetch(`https://6392fd90ab513e12c5ff47f0.mockapi.io/get-hotel-photos`)
		// 	.then(response => response.json())
		// 	.then(response => {
		// 		setPhotos(response[0]);
		// 	})
		// 	.catch(err => console.error(err));

	}, [])

	let nights

	if (checkOut) {
		if (checkOut.split('.')[0] > checkIn.split('.')[0]) {
			nights = checkOut.split('.')[0] - checkIn.split('.')[0]; 
		} else {
			nights = checkIn.split('.')[0] - checkOut.split('.')[0];
		}
	}
	
	document.title = `${locationData.state.hotel_name}`
	
	const handlerFavorite = () => {
		if (isAuth) {
			if (data) {
				set(starCountRef, {
					favorites: [...new Set([locationData.state, ...data.favorites])]
				})
				.then(() => console.log('ok'))	
			} else {
				set(starCountRef, {
					favorites: [locationData.state]
				})
				.then(() => console.log('ok'))
			}
	
			hotelLiked === '' ? setHotelLiked('hotel_liked') : setHotelLiked(null)
		} else {
			navigate('/signin')
		}
  }

	const handleAtAGlance = (id) => {
		if (id === 'moreOrder') {
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
			{photos ? 
			<>
			<section style={{position: 'relative'}}>
				<div onClick={handlerFavorite} className="favoriteHotel cursorP">
					{data ? 
						data.favorites.includes(`${HotelData.data.body.pdpHeader.hotelId}`) ?
							<svg className='hotel_liked'xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff">
								<path d="M0 0h24v24H0V0z" fill="none"/>
								<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
							</svg> :
						<svg className={hotelLiked}xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff">
							<path d="M0 0h24v24H0V0z" fill="none"/>
							<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
						</svg>:
						<svg className={hotelLiked} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff">
							<path d="M0 0h24v24H0V0z" fill="none"/>
							<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
						</svg>
					}
				</div>
				<Carousel>
					{photos.data[284239].map(item => (
						<img 
							key={item.imageId} 
							className='singleHotelPhoto' 
							alt='hotelPhoto' 
							src={`${photos.url_prefix}${item[4]}`}/>
					))}
				</Carousel>
			</section>
			
			<div>
				<div className='flexAmenities' style={{maxWidth: 1300, margin: '0 auto'}}>
					<div>
						<div className='containerMargin'>
							{window.screen.width > 428 ? 
							<div className='flexAmenities'>
								<div className='hotel_info w-100' style={{padding: 0}}>
									<h1 className='desk_hotel_name'>{locationData.state.hotel_name}</h1>
									<p className='desk_hotel_local'>{locationData.state.address} | {locationData.state.city_trans}</p>
								</div>
								<div style={{width: 130}}>
									<div className="hotel_info" style={{padding: 0}}>
										<p className='desk_hotel_rating'>
											<img className='start_rating' alt='star' src='../image/svg/Star 5.svg'/>
											{locationData.state.review_score} ({locationData.state.review_nr})
										</p>
										<div className="DeskGood">
											<p>{locationData.state.review_score_word}</p>
										</div>
										{checkOut ? 
										<>
											<p className='nights' style={{width: '100%'}}>{nights} nights, {adults} adults</p>
											<p className='total_prise'>{locationData.state.price_breakdown.currency} {locationData.state.price_breakdown.all_inclusive_price}</p>
											<a target='_blank' href={locationData.state.url} rel="noreferrer" className='show_now cursorP'>Book Now</a>
										</>
										: <></>}
									</div>
								</div>
							</div>
							: 
							<>
								<h1 className='hotel_name'>{locationData.state.hotel_name}</h1>
								<div className='DF_JE'>
									<p className='hotel_local margin10'>{locationData.state.address} | {locationData.state.city_trans}</p>
									<p className='hotel_rating margin10'>
										<img className='start_rating ' alt='star' src='../image/svg/Star 5.svg'/>
										{locationData.state.review_score} ({locationData.state.review_nr})
									</p>
								</div>
							</>}
							
							<div className='footer_line margin24'></div>
						</div>
						<div className='hotelAmenities'>
							<div className='DF_JS_AC marginBoby'>
								<p className='hotel_name'>Amenities</p>
								<p onClick={handleSeeAll} className='seeAllAmenities cursorP'>See All</p>
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
						{window.screen.width > 428 ? <></> 
						: 
						<div className="containerMargin totalPriceBox">
							<div className="DF_JE">
								<p className='room_info' style={{color: '#304659'}}>Total:</p>
								<p className='room_info' style={{color: '#3A6AD5'}}>$3,499</p>
							</div>
							<a target='_blank' href={locationData.state.url} rel="noreferrer" className="roomBookNow">Book Now</a>
						</div>
						}
						<div className='containerMargin'>
							<div className='atAGlance cursorP'>
								<div onClick={() => handleAtAGlance('moreOrder')} id='moreOrder' className="DF_JS_AC">
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
							<div className='atAGlance cursorP'>
								<div onClick={() => handleAtAGlance('moreCheck')} id='moreCheck' className="DF_JS_AC">
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
					</div>
				</div>
				<div id='amenitiesPopUp' className="amenitiesPopUp">
					<div className="amenitiesHeader">
						<div onClick={handleCloseSeeAll} className="arrowLeft rotate90 cursorP">
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
			</div>
			</> : 
			<div className='loadingModal'>
				<div className='container'>
					<p className='logo_effect fw-Bold fz-27'>Looking for suitable hotels</p>
				</div>
			</div>}
		</div>
	)
}

export {SingleHotel}