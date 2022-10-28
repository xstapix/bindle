import React from 'react'
import { Link, Outlet, useLocation } from "react-router-dom";
import {useAuth} from '../hook/useAuth'
import './Layout.sass';


const Layout = () => {
  const {isAuth} = useAuth()
  const location = useLocation()

  return (
    <>
      <header className={location.pathname === '/' ? 'headerTransparent' : 'headerBlue'}>
        <div className='container'>
          <nav>
            <Link to='/'>
              <div className='logo'>
                <picture>
                  <source  srcSet='../image/svg/logo-mobile.svg' media='(max-width: 428px)'/>
                  <img alt='logo' src='../image/svg/logo-desktop.svg'/>
                </picture>
                <p className='logo_name'>Bindle</p>
              </div>
            </Link>
            {isAuth ?
            <div className='profile'>
              <div>
                <img className='menu' alt='menu-profile' src='../image/svg/menu.svg'/>
              </div>
              <Link to='/account'>
                <img alt='profile' src='../image/Ellipse 16.png'/>
              </Link>  
            </div> :
            <Link to='/signin'>
              <img className='noLogin' alt='profile' src='../image/svg/noLogin.svg'/>
            </Link>}
          </nav>
        </div>
      </header>

      <Outlet/>

      <footer>
        <div className='container'>
          <div className='logo logo_footer'>
            <picture>
              <source  srcSet='../image/svg/logo-mobile.svg' media='(max-width: 428px)'/>
              <img alt='logo' src='../image/svg/logo-desktop.svg'/>
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
              <img alt='send' src='../image/svg/carbon_send-alt.svg'/>
            </button>
          </form>
          <div className='social'>
            <div className='footer_circle'><img alt='social' src='../image/svg/twitter.svg'/></div>
            <div className='footer_circle'><img alt='social' src='../image/svg/facebook.svg'/></div>
            <div className='footer_circle'><img alt='social' src='../image/svg/inst.svg'/></div>
          </div>
          <p className='copyrightSign'>© 2022  Bindle.</p>
        </div>
      </footer>
    </>
  )
}

export {Layout}