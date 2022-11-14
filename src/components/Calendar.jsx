import  { useState } from 'react';

import './Calendar.sass'
import Calendar from 'react-calendar';
import { useLocation, useParams } from "react-router-dom";

import { setData } from '../store/slice/checkDateSlice';
import {useDispatch} from 'react-redux'
import { useCheckDate} from '../hook/useCheckDate';

const CalendarComponent = () => {
  const {pathname} = useLocation()
  const {localSearch} = useParams()
  const dispatch = useDispatch()

  const [value, onChange] = useState(new Date());
  const [calendarActive, setCalendarActive] = useState(false)
  const {checkIn, checkOut} = useCheckDate()

  const handlerCalendar = () => {
    if (calendarActive) {
      setCalendarActive(false)
      document.body.style.overflow = 'visible'
    } else {
      setCalendarActive(true)
      document.body.style.overflow = 'hidden'
    }
    dispatch(setData({
      checkIn: value[0].toLocaleDateString(),
      checkOut: value[1].toLocaleDateString(),
    }))
  }
  console.log(value);

  return (
    <>
      <div className='DF_JS_AC'>
        <div 
          onClick={handlerCalendar} 
          className={ pathname === `/${localSearch}` ? 'graySearch color-304659 marginRight' : 'date-search color-757575 marginRight'}
          id='searchInput'>
          {checkIn ? value[0].toLocaleDateString() : 'When does it start?'}
          {/* When does it start? */}
        </div>
        <div 
          onClick={handlerCalendar} 
          className={ pathname === `/${localSearch}` ? 'graySearch color-304659 marginLeft' : 'date-search color-757575 marginLeft'}
          id='searchInput'>
          {checkOut ? value[1].toLocaleDateString() : 'When does it end?'}
          {/* When does it end? */}
        </div>
      </div>
      
      <div className={calendarActive ? 'S_Active' : 'S_None'}>
        <div className='settingBackground' onClick={handlerCalendar}>
          <div className="filterS" onClick={(event) => event.stopPropagation()}>
            <div className='container'>
              <Calendar 
                onChange={onChange} 
                value={value} 
                locale='en' 
                selectRange={true}
                />
              {/* <button 
                onClick={handlerCalendar} 
                className='applySettings'>Apply</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CalendarComponent