import { useEffect } from 'react'
import {useState} from 'react'

const FilterSetting = ({hAppliedPrice, hAppliedStar}) => {
  const [priceMax, setPriceMax] = useState('')
  const [priceMin, setPriceMin] = useState('')
  const [starList, setStarList] = useState({
    five: false,
    four: false,
    three: false,
    two: false})
  const [filterActive, setFilterActive] = useState(false)

  useEffect(() => {
    hAppliedPrice({priceMin, priceMax})
  }, [priceMin, priceMax])

  
  
  const handlerFilter = () => {
    if (filterActive) {
      setFilterActive(false)
      document.body.style.overflow = 'visible'
    } else {
      setFilterActive(true)
      document.body.style.overflow = 'hidden'
    }
  }

  const handlerReset = () => {
    setPriceMax('')
    setPriceMin('')
  }

  const handlerCheckbox = (e) => {
    const newList = starList
    newList[e.target.value] = e.target.checked 
    setStarList(newList)
    hAppliedStar(starList)
  }

  return (
    <>
    <img onClick={handlerFilter} className='setting filter' alt='filter' src='../image/svg/tune.svg'/>
    <div className={filterActive ? 'S_Active' : 'S_None'} id='filter'>
      <div onClick={handlerFilter} className='settingBackground'></div>
      <div className='filterS'>
        <div className='container'>
          <div className='filter_header'>
            <img onClick={handlerFilter} alt='black' src='../image/svg/close.svg'/>
            <p className='filterS_name'>Filter</p>
            <p className='filter_reset' onClick={handlerReset}>Reset</p>
          </div>
          <div className='priseS'>
            <p>Price</p>
            <div className='DF_JS_AC'>
              <input 
                onChange={e => setPriceMin(e.target.value)}
                type='number'
                placeholder='Of'
                value={priceMin}
                className='graySearch marginRight'/>
              <input
                onChange={e => setPriceMax(e.target.value)}
                type='number'
                placeholder='To'
                value={priceMax}
                className='graySearch marginLeft'/>
            </div>
          </div>
          <p className='paragraph'>Property class</p>
          <div className='starProperty'>
            <label htmlFor='five'>
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
            </label>
            <input 
              className='custom_checkbox' 
              type="checkbox" 
              value='five'
              onChange={handlerCheckbox}
              />
          </div>
          <div className='starProperty'>
            <label >
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
            </label>
            <input 
              className='custom_checkbox' 
              type="checkbox" 
              onChange={handlerCheckbox}
              value="four"/>
          </div>
          <div className='starProperty'>
            <label>
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
            </label>
            <input 
              className='custom_checkbox' 
              type="checkbox" 
              onChange={handlerCheckbox}
              value="three"/>
          </div>
          <div className='starProperty'>
            <label >
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
            </label>
            <input 
              className='custom_checkbox' 
              type="checkbox" 
              onChange={handlerCheckbox}
              value="two"/>
          </div>
          <button 
            onClick={handlerFilter} 
            className='applySettings'>Apply</button>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default FilterSetting