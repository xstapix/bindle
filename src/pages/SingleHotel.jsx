import './SingleHotel.sass'

import { useParams } from 'react-router-dom'

import HotelData from '../exampleSingleHotel.json'
import HotelPhoto from '../exampleSingleHotelPhoto.json'

const SingleHotel = () => {
  const {IDHotel} = useParams()
  return (
    <div>
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
            <p className='seeAllAmenities'>See All</p>
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
            <p className='room_info'>Bed Choices:  
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
          <div className='atAGlance DF_JS_AC'>
            <p>Order of residence</p>
            <img alt='more' src='../image/svg/more.svg'/>
          </div>
          <div className='atAGlance DF_JS_AC'>
            <p>Required at check in</p>
            <img alt='more' src='../image/svg/more.svg'/>
          </div>
        </div>
      </div> : <>Loading...</>}
    </div>
  )
}

export {SingleHotel}