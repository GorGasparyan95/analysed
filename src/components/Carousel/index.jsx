import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper'
import { ReactComponent as Left } from '../../assets/left.svg'
import { ReactComponent as Right } from '../../assets/rigth.svg'
import { imageSrcs } from '../../constants/index';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


SwiperCore.use([Navigation, Pagination])

const Carousel = () => {
  const navPrevButton = useRef(null)
  const navNextButton = useRef(null)
  const width = window.innerWidth

  const onBeforeInit = (Swiper) => {
    if (typeof Swiper.params.navigation !== 'boolean') {
      const navigation = Swiper.params.navigation
      navigation.prevEl = navPrevButton.current
      navigation.nextEl = navNextButton.current
    }
  }

  return (
    <div className='carousel_wrapper'>
      <div className='carousel_items_wrapper'>
        {width < 720 ? '' : <button ref={navPrevButton} className="carousel_btn">
          <Left />
        </button>}
        <Swiper
          onBeforeInit={onBeforeInit}
          spaceBetween={50}
          slidesPerView={width <= 970 && width >= 720 ? 2 : width < 720 ? 1 : 3}
          pagination={true}
          style={{ height: 200 }}
        >
          {imageSrcs.map((src, i) => (
            <SwiperSlide key={i}>
               <div className='carousel_image'>
              <img src={src} />
              </div>
            </SwiperSlide>   
          ))}
        </Swiper >
        {width < 720 ? '' : <button ref={navNextButton} className="carousel_btn">
          <Right />
        </button>}

      </div>
    </div>
  )
}

export default Carousel