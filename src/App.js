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
            <img alt='more_travel' src='./image/more_travel/Rectangle 3.png'/>
            <div>
              <h1>Entire homes</h1>
              <p>156,786 properties</p>
            </div>
          </section>
          <section>
            <img alt='more_travel' src='./image/more_travel/Rectangle 4.png'/>
            <div>
              <h1>Cabins and cottages</h1>
              <p>156,786 properties</p>
            </div>
          </section>
          <section>
            <img alt='more_travel' src='./image/more_travel/Rectangle 5.png'/>
            <div>
              <h1>Unique stays</h1>
              <p>156,786 properties</p>
            </div>
          </section>
          <section>
            <img alt='more_travel' src='./image/more_travel/Rectangle 6.png'/>
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
      </main>
    </div>
  );
}

export default App;
