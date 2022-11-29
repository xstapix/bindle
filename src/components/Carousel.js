import {Children, cloneElement, useEffect, useState} from 'react'
import './Carousel.sass'

const Carousel = ({activeSlide, children} ) => {
  const [slide, setSlide] = useState()

  useEffect(() => {
    setSlide(
      Children.map(children, (child) => { 
        return cloneElement(child, {
          style: {
            maxWidth: '100%',
            minWidth: '100%'
          }
        })
      })
    )
  }, [])

  return (
    <div className='main-carousel-container'>
      <div className='window'>
        <div className='all-sliders-container'
        style={{
          transform: `translateX(${activeSlide}px)`
        }}>
          {slide}
        </div>
      </div>
    </div>
  )
}

export default Carousel
