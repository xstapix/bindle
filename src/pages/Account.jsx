import './Account.sass'
import {Link} from 'react-router-dom'
import { removeUser } from '../store/slice/userSlice';
import {useDispatch} from 'react-redux'

const Account = () => {
  const dispatch = useDispatch()

  const handlerLogOut = () => {
    dispatch(removeUser())
  }

  return (
    <div className='account'>
      <div className='container'>
        <div className='account_profile_photo'></div>
        <div className='account_pints'>
          <Link to='/personalData'>
            <section>
              <div>
                <img className='pint_bcg' alt='pint_icon' src='../image/svg/noLogin.svg'/>
                <p className='account_pints_text'>Personal Data</p>
              </div>
              <img alt='arrow_right' src='../image/svg/chevron_right_black_24dp.svg'/>
            </section>
          </Link>
          <Link to='/myBooking'>
            <section>
              <div>
                <img className='pint_bcg' alt='pint_icon' src='../image/svg/.svg'/>
                <p className='account_pints_text'>Booking</p>
              </div>
              <img alt='arrow_right' src='../image/svg/chevron_right_black_24dp.svg'/>
            </section>
          </Link>
          <Link to='/favorites'>
            <section>
              <div>
                <img className='pint_bcg' alt='pint_icon' src='../image/svg/favorite.svg'/>
                <p className='account_pints_text'>Favorites</p>
              </div>
              <img alt='arrow_right' src='../image/svg/chevron_right_black_24dp.svg'/>
            </section>
          </Link>
          <Link to='/settings'>
            <section>
              <div>
                <img className='pint_bcg' alt='pint_icon' src='../image/svg/settings_black_24dp.svg'/>
                <p className='account_pints_text'>Settings</p>
              </div>
              <img alt='arrow_right' src='../image/svg/chevron_right_black_24dp.svg'/>
            </section>
          </Link>
          <Link to='/'>
            <section onClick={handlerLogOut}>
              <div>
                <img className='pint_bcg-out' alt='pint_icon' src='../image/svg/logout_black_24dp.svg'/>
                <p className='account_pints_text'>Log out</p>
              </div>
              <img alt='arrow_right' src='../image/svg/chevron_right_black_24dp.svg'/>
            </section>
          </Link>
        </div>
      </div>
    </div>
  )
}

export {Account}