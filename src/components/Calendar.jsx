import  { useState } from 'react';

import './Calendar.sass'
import Calendar from 'react-calendar';
import { useLocation, useParams } from "react-router-dom";

import {useSearch} from '../hook/useSearch'

const CalendarComponent = () => {
  const {pathname} = useLocation()
  const {localSearch} = useParams()
  const {checkIn, checkOut} = useSearch()

  const [calendarActive, setCalendarActive] = useState(false)
  const [value, onChange] = useState(new Date());
  
  const handlerCalendar = () => {
    if (calendarActive) {
      setCalendarActive(false)
      document.body.style.overflow = 'visible'
    } else {
      
      setCalendarActive(true)
      document.body.style.overflow = 'hidden'
    }
  }

  return (
    <>
      <div className='DF_JS_AC'>
        <div 
          onClick={handlerCalendar} 
          className={ pathname === `/${localSearch}` ? 'graySearch color-304659 marginRight' : 'date-search color-757575 marginRight'}
          id='searchInput'>
          {checkIn ? `${value[0].toLocaleDateString()}` : 'When does it start?'}
        </div>
        <div 
          onClick={handlerCalendar} 
          className={ pathname === `/${localSearch}` ? 'graySearch color-304659 marginLeft' : 'date-search color-757575 marginLeft'}
          id='searchInput'>
          {checkIn ? `${value[1].toLocaleDateString()}` : 'When does it end?'}
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
                selectRange={true}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CalendarComponent