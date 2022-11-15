import  { useState } from 'react';

import './Calendar.sass'
import Calendar from 'react-calendar';
import { useLocation, useParams } from "react-router-dom";

const CalendarComponent = () => {
  const {pathname} = useLocation()
  const {localSearch} = useParams()
  const [value, onChange] = useState(new Date());
  const [calendarActive, setCalendarActive] = useState(false)
  
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
      <div 
        onClick={handlerCalendar} 
        className={ pathname === `/${localSearch}` ? 'graySearch marginRight' : 'date-search marginRight'}
        id='searchInput'>
        When does it start?
      </div>
      <div 
        onClick={handlerCalendar} 
        className={ pathname === `/${localSearch}` ? 'graySearch marginRight' : 'date-search marginRight'}
        id='searchInput'>
        When does it start?
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