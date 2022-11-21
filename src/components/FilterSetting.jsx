import { useEffect, useState } from 'react'

import MultiRangeSlider from "../components/MultiRangeSlider";


const FilterSetting = ({hAppliedFilter}) => {
  const [priceMax, setPriceMax] = useState(100)
  const [priceMin, setPriceMin] = useState(0)
  const [starList, setStarList] = useState({
    five: false,
    four: false,
    three: false,
    two: false
  })
  const [filterActive, setFilterActive] = useState(false)

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
    setPriceMax(0)
    setPriceMin(100)
  }

  const handlerCheckbox = (e) => {
    const newList = starList
    newList[e.target.value] = e.target.checked 
    setStarList(newList)
  }

  return (
    <>
    <img onClick={handlerFilter} className='setting filter' alt='filter' src='../image/svg/tune.svg'/>
    <div className={filterActive ? 'S_Active' : 'S_None'} id='filter'>
      <div onClick={handlerFilter} className='settingBackground'></div>
      <div className='filterS'>
        <div className='container'>
          <p className='filterS_name'>Filter</p>
          <div className='priseS'>
            <p>Price</p>
            <MultiRangeSlider
              min={0}
              max={100}
              onChange={({ min, max }) => {
                setPriceMax(max)
                setPriceMin(min)
              }}
            />
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
            onClick={() => {
              handlerFilter()
              hAppliedFilter({priceMax, priceMin, starList})
            }} 
            className='applySettings'>Apply</button>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default FilterSetting