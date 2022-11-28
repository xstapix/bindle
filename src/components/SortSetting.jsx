import React from 'react'
import { useState, useEffect } from 'react'

const SortSetting = ({hAppliedSort}) => {
  const [sortActive, setSortActive] = useState(false)
  const [sortList, setSortList] = useState({
    LH: false,
    HL: false,
    D: false,
    U: false
  })

  useEffect(() => {
    if (window.screen.width >= 800) {
      setSortActive(true)
    }
  }, [])

  const handlerSort = () => {
    if (sortActive) {
      setSortActive(false)
      document.body.style.overflow = 'visible'
    } else {
      setSortActive(true)
      document.body.style.overflow = 'hidden'
    }
  }

  const handleCheckbox = (e) => {
    const newList = sortList

    for (const key in sortList) {
      if(key !== e.target.id) {
        document.getElementById(`${key}`).checked = false;
        newList[key] = false
      } else newList[key] = true
    }

    setSortList(newList);
  }

  return (
    <>
      <img onClick={handlerSort} className='setting' alt='sort' src='../image/svg/sort.svg'/>
      <div className={sortActive ? 'S_Active' : 'S_None'} id='sort'>
        <div onClick={handlerSort} className='settingBackground'></div>
        <div className='sortS'>
          <div className='container'>
            <p className='filterS_name sortMargin'>Sort By</p>
            <div className='starProperty'>
              <p>Prise: Low to Hight</p>
              <input 
                onClick={handleCheckbox} 
                className='custom_checkbox' 
                type="checkbox" 
                value="LH"
                id='LH'/>
            </div>
            <div className='starProperty'>
              <p>Prise: Hight to Low</p>
              <input 
                onClick={handleCheckbox} 
                className='custom_checkbox' 
                type="checkbox" 
                value="HL"
                id='HL'/>
            </div>
            <div className='starProperty'>
              <p>Stars: highest first</p>
              <input 
                onClick={handleCheckbox} 
                className='custom_checkbox' 
                type="checkbox" 
                value="D"
                id='D'/>
            </div>
            <div className='starProperty'>
              <p>Stars: lowest first</p>
              <input
                onClick={handleCheckbox} 
                className='custom_checkbox' 
                type="checkbox" 
                value="U"
                id='U'/>
            </div>
            {window.screen.width >= 800 ? 
            <button 
              onClick={() => {
                hAppliedSort(sortList)
              }} 
              className='applySettings'>Apply</button>
            : <button 
              onClick={() => {
                handlerSort()
                hAppliedSort(sortList)
              }} 
              className='applySettings'>Apply</button>
            }
          </div>
        </div>
      </div>
    </>

    
  )
}

export default SortSetting