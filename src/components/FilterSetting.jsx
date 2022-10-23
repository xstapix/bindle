import {useState} from 'react'

const FilterSetting = ({hAppliedFilter}) => {
  const [priceMax, setPriceMax] = useState(500)
  const [priceMin, setPriceMin] = useState(0)
  const [star, setStar] = useState()
  
  const handlerFilter = () => {
    document.getElementById("filter").classList.toggle("S_Active")
  }

  const handlerReset = () => {
    // setPrice(500)
    document.getElementById('price').value = 500;
  }


  return (
    <div className='settingBody' id='filter'>
      <div onClick={handlerFilter} className='settingBackground'></div>
      <div className='filterS'>
        <div className='container'>
          <div className='filter_header'>
            <img onClick={handlerFilter} alt='black' src='../image/svg/close.svg'/>
            <p className='filterS_name'>Filter</p>
            <p className='filter_reset' onClick={handlerReset}>Reset</p>
          </div>
          <div className='priseS'>
            <label htmlFor='prise'>Price</label>
            <p>${priceMin} - {priceMax}</p>
          </div>
          <div className='rangeContainer'>
            <div className='slider-track'></div>
            <input type="range" id="slider-1" onChange={e => setPriceMax(e.target.value)}
              min="0" max='500' defaultValue={priceMax}/>
            <input type="range" id="slider-2" onChange={e => setPriceMin(e.target.value)}
              min="0" max='500' defaultValue={priceMin}/>
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
            <input onClick={() => setStar(5)} className='custom_checkbox' type="checkbox" id="five"/>
          </div>
          <div className='starProperty'>
            <label >
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
            </label>
            <input onClick={() => setStar(4)} className='custom_checkbox' type="checkbox" id="four" name="four"/>
          </div>
          <div className='starProperty'>
            <label>
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
            </label>
            <input onClick={() => setStar(3)} className='custom_checkbox' type="checkbox" id="three" name="three"/>
          </div>
          <div className='starProperty'>
            <label >
              <img alt='star' src='../image/svg/Star 5.svg'/>
              <img alt='star' src='../image/svg/Star 5.svg'/>
            </label>
            <input onClick={() => setStar(2)} className='custom_checkbox' type="checkbox" id="two" name="two"/>
          </div>
          <button onClick={() => hAppliedFilter(priceMax, star)}  className='applySettings'>Apply</button>
        </div>
      </div>
    </div>
  )
}

export default FilterSetting