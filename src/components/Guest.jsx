import {useState} from 'react'
import { useLocation, useParams } from "react-router-dom";

import './Guest.sass'

import { setData } from '../store/slice/searchDataSlice';
import {useDispatch} from 'react-redux'
import {useSearch} from '../hook/useSearch'

const Guest = () => {
  const {pathname} = useLocation()
  const {localSearch} = useParams()
  const dispatch = useDispatch()

  const [guestActive, setGuestActive] = useState(false)
  const [Adults, setAdults] = useState(1)
  const [Children, setChildren] = useState(0)
  const [Rooms, setRooms] = useState(1)

  const handlerGuest = () => {
    if (guestActive) {
      setGuestActive(false)
      document.body.style.overflow = 'visible'
      // dispatch(setData({
      //   guests: {
      //     'adults': Adults,
      //     'children': Children,
      //     'rooms': Rooms
      //   },
      // }))
    } else {
      setGuestActive(true)
      document.body.style.overflow = 'hidden'
    }
  }

  return (
    <>
    <div className='DF_JS_AC'>
      <div
        onClick={handlerGuest}
        className={ pathname === `/${localSearch}` ? 'graySearch color-304659 marginRight' : 'date-search marginRight color-757575'}
        id='searchInput'>
        {`Abults: ${Adults}`}
      </div>
      <div
        onClick={handlerGuest}
        className={ pathname === `/${localSearch}` ? 'graySearch color-304659 margin-0_2_0' : 'date-search margin-0_2_0 color-757575'}
        id='searchInput'>
        {`Children: ${Children}`}
      </div><div
        onClick={handlerGuest}
        className={ pathname === `/${localSearch}` ? 'graySearch color-304659  marginLeft' : 'date-search marginLeft color-757575'}
        id='searchInput'>
        {`Rooms: ${Rooms}`}
      </div>
    </div>

      <div className={guestActive ? 'S_Active' : 'S_None'}>
        <div className='settingBackground' onClick={handlerGuest}>
          <div className="filterS" onClick={(event) => event.stopPropagation()}>
            <div className='container'>
              <div className='DF_JS_AC margin-0_0_24'>
                <p className='fw-Bold fz-17 lh-16 color-304659'>Adults</p>
                <div className='DF_JS_AC'>
                  {Adults === 1 ? <div className='BG-F9FAFC padding-5 DF br_radius-284'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.75C5.53333 12.75 5.35417 12.6792 5.2125 12.5375C5.07083 12.3958 5 12.2167 5 12C5 11.7833 5.07083 11.6042 5.2125 11.4625C5.35417 11.3208 5.53333 11.25 5.75 11.25H18.25C18.4667 11.25 18.6458 11.3208 18.7875 11.4625C18.9292 11.6042 19 11.7833 19 12C19 12.2167 18.9292 12.3958 18.7875 12.5375C18.6458 12.6792 18.4667 12.75 18.25 12.75H5.75Z" fill="white"/>
                    </svg>
                  </div> : 
                  <div onClick={() => setAdults(Adults - 1)} className='BG-3A6AD5 padding-5 DF br_radius-284'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.75C5.53333 12.75 5.35417 12.6792 5.2125 12.5375C5.07083 12.3958 5 12.2167 5 12C5 11.7833 5.07083 11.6042 5.2125 11.4625C5.35417 11.3208 5.53333 11.25 5.75 11.25H18.25C18.4667 11.25 18.6458 11.3208 18.7875 11.4625C18.9292 11.6042 19 11.7833 19 12C19 12.2167 18.9292 12.3958 18.7875 12.5375C18.6458 12.6792 18.4667 12.75 18.25 12.75H5.75Z" fill="white"/>
                    </svg>
                  </div>}
                  <p className='fw-Bold fz-17 lh-16 color-304659 margin-0_22'>{Adults}</p>
                  <div onClick={() => setAdults(Adults + 1)} className='BG-3A6AD5 padding-5 DF br_radius-284'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 19V12.75H5V11.25H11.25V5H12.75V11.25H19V12.75H12.75V19H11.25Z" fill="white"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className='DF_JS_AC margin-0_0_24'>
                <p className='fw-Bold fz-17 lh-16 color-304659'>Children</p>
                <div className='DF_JS_AC'>
                  {Children === 0 ? <div className='BG-F9FAFC padding-5 DF br_radius-284'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.75C5.53333 12.75 5.35417 12.6792 5.2125 12.5375C5.07083 12.3958 5 12.2167 5 12C5 11.7833 5.07083 11.6042 5.2125 11.4625C5.35417 11.3208 5.53333 11.25 5.75 11.25H18.25C18.4667 11.25 18.6458 11.3208 18.7875 11.4625C18.9292 11.6042 19 11.7833 19 12C19 12.2167 18.9292 12.3958 18.7875 12.5375C18.6458 12.6792 18.4667 12.75 18.25 12.75H5.75Z" fill="white"/>
                    </svg>
                  </div> :
                  <div onClick={() => setChildren(Children - 1)} className='BG-3A6AD5 padding-5 DF br_radius-284'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.75C5.53333 12.75 5.35417 12.6792 5.2125 12.5375C5.07083 12.3958 5 12.2167 5 12C5 11.7833 5.07083 11.6042 5.2125 11.4625C5.35417 11.3208 5.53333 11.25 5.75 11.25H18.25C18.4667 11.25 18.6458 11.3208 18.7875 11.4625C18.9292 11.6042 19 11.7833 19 12C19 12.2167 18.9292 12.3958 18.7875 12.5375C18.6458 12.6792 18.4667 12.75 18.25 12.75H5.75Z" fill="white"/>
                    </svg>
                  </div>}
                  <p className='fw-Bold fz-17 lh-16 color-304659 margin-0_22'>{Children}</p>
                  <div onClick={() => setChildren(Children + 1)} className='BG-3A6AD5 padding-5 DF br_radius-284'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 19V12.75H5V11.25H11.25V5H12.75V11.25H19V12.75H12.75V19H11.25Z" fill="white"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className='DF_JS_AC margin-0_0_24'>
                <p className='fw-Bold fz-17 lh-16 color-304659'>Rooms</p>
                <div className='DF_JS_AC'>
                  {Rooms === 1 ? <div className='BG-F9FAFC padding-5 DF br_radius-284'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.75C5.53333 12.75 5.35417 12.6792 5.2125 12.5375C5.07083 12.3958 5 12.2167 5 12C5 11.7833 5.07083 11.6042 5.2125 11.4625C5.35417 11.3208 5.53333 11.25 5.75 11.25H18.25C18.4667 11.25 18.6458 11.3208 18.7875 11.4625C18.9292 11.6042 19 11.7833 19 12C19 12.2167 18.9292 12.3958 18.7875 12.5375C18.6458 12.6792 18.4667 12.75 18.25 12.75H5.75Z" fill="white"/>
                    </svg>
                  </div> : 
                  <div onClick={() => setRooms(Rooms - 1)} className='BG-3A6AD5 padding-5 DF br_radius-284'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.75C5.53333 12.75 5.35417 12.6792 5.2125 12.5375C5.07083 12.3958 5 12.2167 5 12C5 11.7833 5.07083 11.6042 5.2125 11.4625C5.35417 11.3208 5.53333 11.25 5.75 11.25H18.25C18.4667 11.25 18.6458 11.3208 18.7875 11.4625C18.9292 11.6042 19 11.7833 19 12C19 12.2167 18.9292 12.3958 18.7875 12.5375C18.6458 12.6792 18.4667 12.75 18.25 12.75H5.75Z" fill="white"/>
                    </svg>
                  </div>}
                  <p className='fw-Bold fz-17 lh-16 color-304659 margin-0_22'>{Rooms}</p>
                  <div onClick={() => setRooms(Rooms + 1)} className='BG-3A6AD5 padding-5 DF br_radius-284'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 19V12.75H5V11.25H11.25V5H12.75V11.25H19V12.75H12.75V19H11.25Z" fill="white"/>
                    </svg>
                  </div>
                </div>
              </div>
              <button 
                onClick={handlerGuest} 
                className='applySettings'>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </>
)
}

export default Guest