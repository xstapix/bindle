import React from 'react'
import { useState } from 'react'

const SortSetting = (hAppliedSort) => {
  const [sortActive, setSortActive] = useState(false)

  const handlerSort = () => {
    if (sortActive) {
      setSortActive(false)
      document.body.style.overflow = 'visible'
    } else {
      setSortActive(true)
      document.body.style.overflow = 'hidden'
    }
  }
  return (
    <>
      <img onClick={handlerSort} className='setting' alt='sort' src='../image/svg/sort.svg'/>
      <div className={sortActive ? 'S_Active' : 'S_None'} id='sort'>
        <div onClick={handlerSort} className='settingBackground'></div>
        <div className='sortS'>
          <div className='container'>
            <img onClick={handlerSort} className='arrowLeft' alt='black' src='../image/svg/close.svg'/>
            <p className='filterS_name sortMargin'>Sort By</p>
            <div className='starProperty'>
              <label htmlFor='LowtoHight'>Price: Low to Hight</label>
              <input className='custom_checkbox' type="radio" id="LowtoHight"/>
            </div>
            <div className='starProperty'>
              <label htmlFor='HighttoLow'>Price: Hight to Low</label>
              <input className='custom_checkbox' type="radio" id="HighttoLow"/>
            </div>
            <div className='starProperty'>
              <label htmlFor='down'>Property class: down</label>
              <input className='custom_checkbox' type="radio" id="down"/>
            </div>
            <div className='starProperty'>
              <label htmlFor='up'>Property class: up</label>
              <input className='custom_checkbox' type="radio" id="up"/>
            </div>
            <button 
              onClick={() => {
                handlerSort()
                hAppliedSort()}}
              className='applySettings'>Apply</button>
          </div>
        </div>
      </div>
    </>

    
  )
}

export default SortSetting