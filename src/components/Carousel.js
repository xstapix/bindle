import {Children, cloneElement, useEffect, useState} from 'react'
import './Carousel.sass'

const Carousel = ({children} ) => {
  const [slide, setSlide] = useState()
	const [offset, setOffset] = useState(0)
	const [touchPosition, setTouchPosition] = useState(null)

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

  const handlerSlider = (id) => {
		if (id === 'prev') {
			if (offset !== 0) {
				if (window.screen.width > 428) {
					setOffset(offset + 1300)
				} else setOffset(offset + window.screen.width)
			}
		} else {
			if (window.screen.width > 428) {
				setOffset(offset - 1300)
			} else setOffset(offset - window.screen.width)
		}
	}

	const handleTouchStart = (e) => {
		const touchDown = e.touches[0].clientX
		setTouchPosition(touchDown)
	}

	const handleTouchMove = (e) => {
    const touchDown = touchPosition

    if(touchDown === null) {
        return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 7) {
			setOffset(offset - window.screen.width)
    }

    if (diff < -7) {
			if (offset !== 0) {
				setOffset(offset + window.screen.width)
			}
    }

    setTouchPosition(null)
	}

  return (
    <div className='main-carousel-container' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <div className='window'>
				<div onClick={() => handlerSlider('prev')} className="prev cursorP">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </div>
        <div className='all-sliders-container'
        style={{
          transform: `translateX(${offset}px)`
        }}>
          {slide}
        </div>
				<div onClick={() =>handlerSlider('next')} className="next cursorP">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg></div>
      </div>
    </div>
  )
}

export default Carousel
