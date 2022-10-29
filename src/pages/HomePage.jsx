import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

import './HomePage.sass';
import CalendarComponent from '../components/Calendar'

const HomePage = () => {
  const [searchInput, setSearchInput] = useState('')
  const navigate = useNavigate()
  
  document.title = 'Bindle'

  const handlerSearch = (event) => {
    const documentSearchInput = document.getElementById('searchInput')

    setSearchInput(event.target.value)

    documentSearchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        navigate(`/${e.target.value}`)
      }
    })
  }


  return (
    <>
      <div className='background'></div>
      <div className='hello'>
        <div className='container'>
          <h1>Discover New Destination</h1>
          <p>This modern trend looks nice and all, but we fell into the same trap again.</p>
          <input 
            onChange={e => handlerSearch(e)}
            type="text"
            value={searchInput}
            placeholder='Where are you going?' 
            className='hello-search'
            id='searchInput'/>
          <div className='DF_JS_AC'>
            <CalendarComponent/>
            <input 
              onChange={e => handlerSearch(e)}
              type="text"
              value={searchInput}
              placeholder='How many people?' 
              className='date-search marginLeft'
              id='searchInput'/>
          </div>
        </div>
      </div>
      <main>
        <div className='container'>
          <h1 className='table_of_contents'>Nearby stays</h1>
          <p className='text'>Because you viewed vacation homes in this city</p>
        </div>
        <div className='list-stays'>
          <Link to='/Florida'>
            <section>
              <img className='plug' alt='stays' src='./image/stays/Rectangle 23.png'/>
              <div className='place-text'>
                <h1>Florida</h1>
                <p>156,786 properties</p>
              </div>
            </section>
          </Link>
          <Link to='/Texas'>
            <section> 
              <img className='plug' alt='stays' src='./image/stays/Rectangle 25.png'/>
              <div className='place-text'>
                <h1>Texas</h1>
                <p>156,786 properties</p>
              </div>
            </section>
          </Link>
          <Link to='/Miami'>
            <section>
              <img className='plug' alt='stays' src='./image/stays/Rectangle 26.png'/>
              <div className='place-text'>
                <h1>Miami</h1>
                <p>156,786 properties</p>
              </div>
            </section>
          </Link>
          <Link to='/Chicago'>
            <section> 
              <img className='plug' alt='stays' src='./image/stays/Rectangle 27.png'/>
              <div className='place-text'>
                <h1>Chicago</h1>
                <p>156,786 properties</p>
              </div>
            </section>
          </Link>
          <Link to='/New York'>
            <section>
              <img className='plug' alt='stays' src='./image/stays/Rectangle 22.png'/>
              <div className='place-text'>
                <h1>New York</h1>
                <p>156,786 properties</p>
              </div>
            </section>
          </Link>
          <Link to='/Toronto'>
            <section> 
              <img className='plug' alt='stays' src='./image/stays/Rectangle 24.png'/>
              <div className='place-text'>
                <h1>Toronto</h1>
                <p>156,786 properties</p>
              </div>
            </section>
          </Link>
        </div>
        <div className='container'>
          <h1 className='table_of_contents'>Explore more travel vacation rentals</h1>
        </div>
        <div className='more_travel'>
          <section>
            <img className='plug_more' alt='more_travel' src='./image/more_travel/Rectangle 3.png'/>
            <div>
              <h1>Entire homes</h1>
              <p>156,786 properties</p>
            </div>
          </section>
          <section>
            <img className='plug_more' alt='more_travel' src='./image/more_travel/Rectangle 4.png'/>
            <div>
              <h1>Cabins and cottages</h1>
              <p>156,786 properties</p>
            </div>
          </section>
          <section>
            <img className='plug_more' alt='more_travel' src='./image/more_travel/Rectangle 5.png'/>
            <div>
              <h1>Unique stays</h1>
              <p>156,786 properties</p>
            </div>
          </section>
          <section>
            <img className='plug_more' alt='more_travel' src='./image/more_travel/Rectangle 6.png'/>
            <div>
              <h1>Pets welcome</h1>
              <p>156,786 properties</p>
            </div>
          </section>
        </div>
        <div className='container'>
          <div className='popular'>
            <h1 className='table_of_contents'>Popular Destinations</h1>
            <button className='explore_all'>
              <p>Explore All</p>
              <img alt='Explore All' src='./image/svg/arrow-right.svg'/>
            </button>
          </div>
          <div className='tile'>
            <section style={{gridArea: 'East'}}>
              <Link to='/East Coast'>
                <img alt='popular' src='./image/popular/Rectangle 22.png'/>
                <div className='blure'>
                  <h1>East Coast, America</h1>
                  <p>146,786 properties</p>
                </div>
              </Link>
            </section>
            <section style={{gridArea: 'Chicago'}}>
              <Link to='/Chicago'>
                <img alt='popular' src='./image/popular/Rectangle 9.png'/>
                <div className='blure'>
                  <h1>Chicago, America</h1>
                  <p>146,786 properties</p>
                </div>
              </Link>
            </section>
            <section style={{gridArea: 'Texas'}}>
              <Link to='/Texas'>
                <img alt='popular' src='./image/popular/Rectangle 17.png'/>
                <div className='blure'>
                  <h1>Texas, America</h1>
                  <p>146,786 properties</p>
                </div>
              </Link>
            </section>
            <section style={{gridArea: 'Florida'}}>
              <Link to='/Florida'>
                <img alt='popular' src='./image/popular/Rectangle 30.png'/>
                <div className='blure'>
                  <h1>Florida, America</h1>
                  <p>146,786 properties</p>
                </div>
              </Link>
            </section>
          </div>
        </div>
        <div className='container'>
          <h1 className='table_of_contents'>Featured homes recommended for you</h1>
          <p className='text'>Because you viewed vacation homes in this city</p>
        </div>
        <div className='recommended'>
          <section>
            <img className='plug_hotel' alt='hotel' src='./image/Image.png'/>
            <p className='hotel_rating'>
              <img className='start_rating' alt='star' src='./image/svg/Star 5.svg'/>
              4.60 (280)</p>
            <h1 className='hotel_name'>Luxury 3 Bedroom Apartment at Epicentrum</h1>
            <p className='hotel_local'>Entire house | Florida</p>
            <h1 className='hotel_price'>$ 350/ night</h1>
          </section>
          <section>
            <img className='plug_hotel' alt='hotel' src='./image/Image.png'/>
            <p className='hotel_rating'>
              <img className='start_rating' alt='star' src='./image/svg/Star 5.svg'/>
              4.60 (280)</p>
            <h1 className='hotel_name'>Luxury 3 Bedroom Apartment at Epicentrum</h1>
            <p className='hotel_local'>Entire house | Florida</p>
            <h1 className='hotel_price'>$ 350/ night</h1>
          </section>
        </div>
        <div className='container'>
          <h1 className='table_of_contents'>Testimonials & Gallery</h1>
        </div>
        <div className='gallery'>
          <section style={{gridArea: 'desert'}}>
            <img className='desert' alt='gallery' src='./image/gallery/Rectangle 1.png'/>
            <div className='blure_gallery'>
              <p>I’ve spent a wonderful time here. Will come back for sure next year together with my family and friends.</p>
            </div>
          </section>
          <section style={{gridArea: 'water'}}>
            <img className='water' alt='gallery' src='./image/gallery/Rectangle 2.png'/>
            <div className='blure_gallery'>
              <p>I absolutely love the beach and water here. Everything was wonderful.</p>
            </div>
          </section>
          <section style={{gridArea: 'urac'}}>
            <img className='long' alt='gallery' src='./image/gallery/Rectangle 3.png'/>
          </section>
          <section style={{gridArea: 'mountains'}}>
            <img className='long' alt='gallery' src='./image/gallery/Rectangle 4.png'/>
          </section>
        </div>
        <div className='container'>
          <section className='callForRegistration'>
            <h1>Get the best discounts for your family vacation.</h1>
            <div>
              <p><img className='check' alt='check' src='./image/svg/bi_check-circle.svg'/>Best discounts ever</p>
              <p><img className='check' alt='check' src='./image/svg/bi_check-circle.svg'/>Free offers</p>
              <p><img className='check' alt='check' src='./image/svg/bi_check-circle.svg'/>Fast & secure payments</p>
            </div>
            <Link to='/signup'>
              <button className='signUpNow'>Sign Up Now</button>
            </Link>
          </section>
        </div>
      </main>
    </>
  )
}

export {HomePage}
