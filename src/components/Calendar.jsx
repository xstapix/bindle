import  { useState } from 'react';

import './Calendar.sass'
import Calendar from 'react-calendar';
import { useParams } from "react-router-dom";

import { setData } from '../store/slice/checkDateSlice';
import {useDispatch} from 'react-redux'
import {useCheckDate} from '../hook/useCheckDate'

const CalendarComponent = () => {
  const {localSearch} = useParams()
  const dispatch = useDispatch()
  const {checkIn, checkOut} = useCheckDate()

  const [value, onChange] = useState(new Date());
  const [calendarActive, setCalendarActive] = useState(false)
  
  const handlerCalendar = () => {
    if (calendarActive) {
      setCalendarActive(false)
      if (window.screen.width <= 428) {
        document.body.style.overflow = 'visible'
      }
    } else {
      setCalendarActive(true)
      if (window.screen.width <= 428) {
        document.body.style.overflow = 'hidden'
      }
    }
    dispatch(setData({
      checkIn: value[0].toLocaleDateString(),
      checkOut: value[1].toLocaleDateString(),
    }))
  } 

  if (window.screen.width > 428) {
    if(calendarActive) {
      document.addEventListener('click', (event) => {
        if (event.target.id !== 'calendar') {
          setCalendarActive(false)
          dispatch(setData({
            checkIn: value[0].toLocaleDateString(),
            checkOut: value[1].toLocaleDateString(),
          }))
        }
      })
    }
  }

  return (
    <>
    {(localSearch && window.screen.width > 428) ? 
      <div style={{position: 'relative'}} >
        <p className='propertisSearch'>Check In</p>
        <div 
          onClick={handlerCalendar} 
          className='graySearch color-304659 borterR cursorP'
          style={{margin: '0 0 13px'}}
          id='calendar'>
          {checkIn ? checkIn : 'Check In'}
        </div>
        <p className='propertisSearch'>Check Out</p>
        <div 
          onClick={handlerCalendar} 
          className='graySearch color-304659 borterR cursorP'
          style={{margin: '0 0 13px'}}
          id='calendar'>
          {checkOut ? checkOut : 'Check Out'}
        </div>
        <div className={calendarActive ? 'S_Active' : 'S_None'}>
          <div className='settingBackground' onClick={handlerCalendar}>
            <div className="calendarS" onClick={(event) => event.stopPropagation()} style={{bottom: -230, left: 320, width: 400}}>
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
      </div>
      : <div onClick={handlerCalendar} className='calendar_desk'>
        <div className='DF cursorP' id='calendar'>
          <p className='date_text-desk' id='calendar'>Date</p>
          <svg id='calendar' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.96967 8.21967C5.26256 7.92678 5.73744 7.92678 6.03033 8.21967L11.8232 14.0126C11.9209 14.1102 12.0791 14.1102 12.1768 14.0126L17.9697 8.21967C18.2626 7.92678 18.7374 7.92678 19.0303 8.21967C19.3232 8.51256 19.3232 8.98744 19.0303 9.28033L13.2374 15.0732C12.554 15.7566 11.446 15.7566 10.7626 15.0732L4.96967 9.28033C4.67678 8.98744 4.67678 8.51256 4.96967 8.21967Z" fill="#FF6647"/>
          </svg>
        </div>
        <div className='color-696F8C cursorP' id='calendar'>
          {checkOut ? 
            <>
              <p id='calendar'>In: {checkIn}</p> 
              <p id='calendar'>Out: {checkOut}</p>
            </> : 
            'When does it start?'}
        </div>
        <div className={calendarActive ? 'S_Active' : 'S_None'}>
          <div className='settingBackground' onClick={handlerCalendar}>
            <div className="calendarS" onClick={(event) => event.stopPropagation()}>
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
      </div>
    }
      <div className="calendar_mobil">
        <div className='DF_JS_AC'>
          <div 
            onClick={handlerCalendar} 
            className={ localSearch ? 'graySearch color-304659 marginRight' : 'date-search color-757575 marginRight'}
            id='searchInput'>
            {checkIn ? checkIn : 'Check In'}
          </div>
          <div 
            onClick={handlerCalendar} 
            className={ localSearch ? 'graySearch color-304659 marginLeft' : 'date-search color-757575 marginLeft'}
            id='searchInput'>
            {checkOut ? checkOut : 'Check Out'}
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
                  <button 
                    onClick={() => handlerCalendar()}
                    className='applySettings'>Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CalendarComponent