import  { useState } from 'react';

import './Calendar.sass'
import Calendar from 'react-calendar';
import { useLocation, useParams } from "react-router-dom";
// import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const {pathname} = useLocation()
  const {localSearch} = useParams()
  const [value, onChange] = useState(new Date());
  const [calendarActive, setCalendarActive] = useState(false)
  
  const handlerCalendar = () => {
    calendarActive ? setCalendarActive(false) : setCalendarActive(true)
  }

  return (
    <>
      <div 
        onClick={handlerCalendar} 
        className={ pathname === `${localSearch}` ? 'date-search marginRight' : 'graySearch marginRight'}
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
              <div className="DF_JA_AC">
                <button className='canselButton'>Cancel</button>
                <button className='calendarButton'>Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CalendarComponent