import './App.sass';
import './media.sass';

function App() {
  return (
    <div className="App">
      <div className='background'></div>
      <header>
        <div className='container'>
          <nav>
            <div className='logo'>
              <picture>
                <source  srcSet='./image/logo-mobile.svg' media='(max-width: 428px)'/>
                <img alt='logo' src='./image/logo-desktop.svg'/>
              </picture>
              <p className='logo_name'>Bindle</p>
            </div>
            <div className='info'>
              <div className='profile'>
                <div>
                  <img className='menu' alt='menu-profile' src='./image/menu.svg'/>
                </div>
                <div>
                  <img alt='profile' src='./image/Ellipse 16.png'/>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className='hello'>
        <div className='container'>
          <h1>Discover New Destination</h1>
          <p>This modern trend looks nice and all, but we fell into the same trap again.</p>
          <input type='text' placeholder='Where are you going?' className='hello-search'/>
        </div>
      </div>
      <main>
        <div className='container'>
          <h1 className='table_of_contents'>Nearby stays</h1>
          <p className='text'>Because you viewed vacation homes in this city</p>
        </div>
        <div className='list-stays'>
          <section>
            <img className='plug' alt='stays' src='./image/stays/Rectangle 23.png'/>
            <div className='place-text'>
              <h1>Florida</h1>
              <p>156,786 properties</p>
            </div>
          </section>
          <section> 
            <img className='plug' alt='stays' src='./image/stays/Rectangle 25.png'/>
            <div className='place-text'>
              <h1>Texas</h1>
              <p>156,786 properties</p>
            </div>
          </section> <section>
            <img className='plug' alt='stays' src='./image/stays/Rectangle 26.png'/>
            <div className='place-text'>
              <h1>Miami</h1>
              <p>156,786 properties</p>
            </div>
          </section>
          <section> 
            <img className='plug' alt='stays' src='./image/stays/Rectangle 27.png'/>
            <div className='place-text'>
              <h1>Chicago</h1>
              <p>156,786 properties</p>
            </div>
          </section> <section>
            <img className='plug' alt='stays' src='./image/stays/Rectangle 22.png'/>
            <div className='place-text'>
              <h1>New York</h1>
              <p>156,786 properties</p>
            </div>
          </section>
          <section> 
            <img className='plug' alt='stays' src='./image/stays/Rectangle 24.png'/>
            <div className='place-text'>
              <h1>Toronto</h1>
              <p>156,786 properties</p>
            </div>
          </section>
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
              <img alt='Explore All' src='./image/arrow-right.svg'/>
            </button>
          </div>
          <div className='tile'>
            <section style={{gridArea: 'East'}}>
              <img alt='popular' src='./image/popular/Rectangle 22.png'/>
              <div className='blure'>
                <h1>East Coast, America</h1>
                <p>146,786 properties</p>
              </div>
            </section>
            <section style={{gridArea: 'Chicago'}}>
              <img alt='popular' src='./image/popular/Rectangle 9.png'/>
              <div className='blure'>
                <h1>Chicago, America</h1>
                <p>146,786 properties</p>
              </div>
            </section>
            <section style={{gridArea: 'Texas'}}>
              <img alt='popular' src='./image/popular/Rectangle 17.png'/>
              <div className='blure'>
                <h1>Texas, America</h1>
                <p>146,786 properties</p>
              </div>
            </section>
            <section style={{gridArea: 'Florida'}}>
              <img alt='popular' src='./image/popular/Rectangle 30.png'/>
              <div className='blure'>
                <h1>Florida, America</h1>
                <p>146,786 properties</p>
              </div>
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
              <img className='start_rating' alt='star' src='./image/Star 5.svg'/>
              4.60 (280)</p>
            <h1 className='hotel_name'>Luxury 3 Bedroom Apartment at Epicentrum</h1>
            <p className='hotel_local'>Entire house | Florida</p>
            <h1 className='hotel_prise'>$ 350/ night</h1>
          </section>
          <section>
            <img className='plug_hotel' alt='hotel' src='./image/Image.png'/>
            <p className='hotel_rating'>
              <img className='start_rating' alt='star' src='./image/Star 5.svg'/>
              4.60 (280)</p>
            <h1 className='hotel_name'>Luxury 3 Bedroom Apartment at Epicentrum</h1>
            <p className='hotel_local'>Entire house | Florida</p>
            <h1 className='hotel_prise'>$ 350/ night</h1>
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
              <p><img className='check' alt='check' src='./image/bi_check-circle.svg'/>Best discounts ever</p>
              <p><img className='check' alt='check' src='./image/bi_check-circle.svg'/>Free offers</p>
              <p><img className='check' alt='check' src='./image/bi_check-circle.svg'/>Fast & secure payments</p>
            </div>
            <button className='signUpNow'>Sign Up Now</button>
          </section>
        </div>
      </main>
      <footer>
        <div className='container'>
          <div className='logo logo_footer'>
            <picture>
              <source  srcSet='./image/logo-mobile.svg' media='(max-width: 428px)'/>
              <img alt='logo' src='./image/logo-desktop.svg'/>
            </picture>
            <p className='logo_name'>Bindle</p>
          </div>
          <article>
            <h1>Explore the world with Bindle!</h1>
            <p>We offer tailored services for all your traveling needs. Our host are wonderful, ready to accommodate your stay as you enjoy your vacation without worries.</p>
          </article>
          <div className='footer_line'></div>
          <nav>
            <p>About us</p>
            <p>Blog</p>
            <p>Help center</p>
            <p>Privacy policy</p>
            <p>Contact us</p>
          </nav>
          <div className='footer_line'></div>
          <p className='footer_sub'>Subscribe to our newsletter</p>
          <form className='sub_to_news'>
            <input type='text' placeholder='Enter your email address'/>
            <button>
              <p>Send</p>
              <img alt='send' src='./image/carbon_send-alt.svg'/>
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;
