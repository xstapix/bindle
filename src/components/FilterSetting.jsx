import {useState} from 'react'

const FilterSetting = () => {
  const [prise, setPrise] = useState(68000)
  
  const handlerFilter = () => {
    document.getElementById("filter").classList.toggle("S_Active")
  }

  return (
    <div className='settingBody' id='filter'>
      <div onClick={handlerFilter} className='settingBackground'></div>
      <div className='filterS'>
        <div className='container'>
          <div className='filter_header'>
            <img onClick={handlerFilter} alt='black' src='../image/svg/close.svg'/>
            <p className='filterS_name'>Filter</p>
            <p className='filter_reset'>Reset</p>
          </div>
          <div className='priseS'>
            <label htmlFor='prise'>Prise</label>
            <p>{prise}</p>
          </div>
          <input className='priseRange' type="range" id="prise" onChange={e => setPrise(e.target.value)}
            min="0" max="68000" defaultValue={prise}/>
          <p className='paragraph'>Property class</p>
          <div className='starProperty'>
            <label >
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
            </label>
            <input className='custom_checkbox' type="checkbox" id="five" name="four"/>
          </div>
          <div className='starProperty'>
            <label >
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
            </label>
            <input type="checkbox" id="four" name="four"/>
          </div>
          <div className='starProperty'>
            <label>
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
            </label>
            <input type="checkbox" id="three" name="three"/>
          </div>
          <div className='starProperty'>
            <label >
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
            </label>
            <input type="checkbox" id="two" name="two"/>
          </div>
          <button className='applySettings'>Apply</button>
        </div>
      </div>
    </div>
  )
}

export default FilterSetting