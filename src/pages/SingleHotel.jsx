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
        <div className='container EditPadding'>
          <h1 className='hotel_name'>{HotelData.data.body.propertyDescription.name}</h1>
          <div className='DF_JS_AC'>
            <p className='hotel_local'>{HotelData.data.body.propertyDescription.address.addressLine1} | {HotelData.data.body.propertyDescription.address.cityName}</p>
            <p className='hotel_rating'>
              <img className='start_rating' alt='star' src='../image/svg/Star 5.svg'/>
              {HotelData.data.body.propertyDescription.starRating} ({HotelData.data.body.guestReviews.brands.total})
            </p>
          </div>
          <div className='footer_line'></div>
          <p className='hotelTextDescription'></p>
          <div className='DF_JS_AC margin24'>
            <h1 className='hotel_price'>$ {HotelData.data.body.propertyDescription.featuredPrice.currentPrice.plain} / night</h1>
            <button className='bookNow'>Book Now</button>
          </div>
        </div>
      </div> : <>Loading...</>}
    </div>
  )
}

export {SingleHotel}