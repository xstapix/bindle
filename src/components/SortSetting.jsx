import React from 'react'

const SortSetting = () => {
  const handleSort = () => {
    document.getElementById("sort").classList.toggle("S_Active")
  }
  return (
    <div className='settingBody' id='sort'>
      <div onClick={handleSort} className='settingBackground'></div>
      <div className='sortS'>
        <div className='container'>
          <img onClick={handleSort} className='arrowLeft' alt='black' src='../image/svg/close.svg'/>
          <p className='filterS_name sortMargin'>Sort By</p>
          <div className='starProperty'>
            <label htmlFor='LowtoHight'>Prise: Low to Hight</label>
            <input className='custom_checkbox' type="radio" id="LowtoHight"/>
          </div>
          <div className='starProperty'>
            <label htmlFor='HighttoLow'>Prise: Hight to Low</label>
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
          <button className='applySettings'>Apply</button>
        </div>
      </div>
    </div>
  )
}

export default SortSetting