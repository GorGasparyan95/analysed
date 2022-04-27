import React, { useRef, useState } from 'react'
import { ReactComponent as Left } from '../../assets/left.svg'
import { ReactComponent as Right } from '../../assets/rigth.svg'


const Carousel = () => {
  const [slide, setSlide] = useState(0)


  const listRef = useRef(null);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: -350,
        behavior: "smooth",
      });
    }
    if (slide === 0) return
    setSlide(slide - 1)
  };


  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: 350,
        behavior: "smooth",
      });
    }
    if (slide === 2) return
    setSlide(slide + 1)
  };


  return (
    <div className='carousel_wrapper'>
      <div className='carousel_container'>
        <Left onClick={scrollLeft} />
        <div className='items_container' ref={listRef}>
          <div className='single_item'>
            <img src="./assets/images/azgayin.png" />
          </div>
          <div className='single_item'>
            <img src="./assets/images/Moris.png" />
          </div>
          <div className='single_item'>
            <img src="./assets/images/Soft.png" />
          </div>
          <div className='single_item'>
            <img src="./assets/images/azgayin.png" />
          </div>
          <div className='single_item'>
            <img src="./assets/images/azgayin.png" />
          </div>
        </div>
        <Right onClick={scrollRight} />
      </div>
      <div className='radio_wrapper'>
        <div type="radio" className={slide === 0 ? "dactive dot" : "dot"} />
        <div type="radio" className={slide === 1 ? "dactive dot" : "dot"} />
        <div type="radio" className={slide === 2 ? "dactive dot" : "dot"} />
      </div>
    </div>
  )
}

export default Carousel