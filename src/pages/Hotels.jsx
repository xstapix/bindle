import './Hotels.sass'

const Hotels = () => {
  return (
    <div className='hotels'>
      <div className='container'>
        <form className='hotels_search'>
          <img alt='search' src='../image/svg/search.svg'/>
          <input type='text' placeholder='Where are you going?' value={'Florida'}/>
        </form>
        <div className='hotels_settings'>
          <img className='setting' alt='sort' src='../image/svg/sort.svg'/>
          <img className='setting filter' alt='sort' src='../image/svg/tune.svg'/>
        </div>
        <div className='hotels_list'> 
          <section>
            <img className='plug_hotel singleItemInList' alt='hotel' src='./image/singleHotel.png'/>
            <div className='hotel_info'>
              <p className='hotel_rating'>
                <img className='start_rating' alt='star' src='./image/svg/Star 5.svg'/>
                4.60 (280)</p>
              <h1 className='hotel_name'>Luxury 3 Bedroom Apartment at Epicentrum</h1>
              <p className='hotel_local'>Entire house | Florida</p>
              <div>
                <h1 className='hotel_prise'>$ 350/ night</h1>
                <button>Book Now</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export {Hotels}