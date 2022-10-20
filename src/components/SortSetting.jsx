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
            <label htmlFor='five1'>Prise: Low to Hight</label>
            <input className='custom_checkbox' type="radio" id="five1" name="four"/>
          </div>
          <div className='starProperty'>
            <label htmlFor='five2'>Prise: Hight to Low</label>
            <input className='custom_checkbox' type="radio" id="five2" name="four"/>
          </div>
          <div className='starProperty'>
            <label>Property class: down</label>
            <input className='custom_checkbox' type="radio" id="five" name="four"/>
          </div>
          <div className='starProperty'>
            <label>Property class: up</label>
            <input className='custom_checkbox' type="radio" id="five" name="four"/>
          </div>
          <button className='applySettings'>Apply</button>
        </div>
      </div>
    </div>
  )
}

export default SortSetting